import "./App.css";
import Bus from "./utils/bus.js";
import React, { useEffect, useState } from "react";
import checkAnswer from "./lib/getAnswer.js";
import Flash from "./Flash.js";
import Logo from "./trashpanda.png";
import { useCookies } from "react-cookie";
import ReactGA from "react-ga";

const App = () => {
  window.flash = (message, type) => Bus.emit("flash", { message, type });

  const [question, setQuestion] = useState("…loading");
  const [questionId, setQuestionId] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [cookies, setCookie] = useCookies();

  const handleClick = () => () => {
    setCookie(questionId, currentAnswer);
    checkAnswer(
      questionId,
      currentAnswer,
      (question, newQuestionId, s = {}) => {
        setQuestion(question);
        setQuestionId(newQuestionId);
        window.flash(s.message, s.status);
        setCurrentAnswer(cookies[newQuestionId] || "");
      }
    );
  };

  useEffect(() => {
    document.cookies = cookies;
    checkAnswer(questionId, currentAnswer, (question, newQuestionId) => {
      setQuestion(question);
      setQuestionId(newQuestionId);
      setCurrentAnswer(cookies[newQuestionId] || "");
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let [type, setType] = useState("");

  useEffect(() => {
    Bus.addListener("flash", ({ message, type }) => {
      setType(type);
      setTimeout(() => {
        setType("");
      }, 4000);
    });
  }, []);

  return (
    <div className="App">
      <div id="analytics">
        {ReactGA.initialize("G-KTC7Q78H78")}
        {ReactGA.pageview(window.location.pathname + window.location.search)}
      </div>

      <header className="App-header">
        <img
          alt="A raccoon slides in from the right"
          src={Logo}
          className="logo"
        />
        Trash Panda <br /> Online Scavenger Hunt
      </header>
      <div id="question" dangerouslySetInnerHTML={{ __html: question }} />
      <Flash />
      <div className="answerSection">
        <hr />
        <h1> Your Answer: </h1>
        <input
          className={type}
          id={questionId}
          onChange={(e) => setCurrentAnswer(e.target.value)}
          value={currentAnswer}
        ></input>
        <br />
        <button id="Submit" onClick={handleClick()}>
          Check Your Answer
        </button>
      </div>
      <footer>
        Coding by <a href="https://github.com/mtuckerb"> @mtuckerb </a>
        &nbsp; Diabolical Questions and Answers by{" "}
        <a href="https://github.com/milesbradford"> @milesbradford </a>
      </footer>
    </div>
  );
};

export default App;
