import "./App.css";
import Bus from "./utils/bus.js";
import React, { useEffect, useState } from "react";
import checkAnswer from "./lib/getAnswer.js";
import Flash from "./Flash.js";
import Logo from "./trashpanda.png";
import { useCookies } from "react-cookie";
import Confetti from "./Confetti.js";

const App = () => {
  window.flash = (message, type) => Bus.emit("flash", { message, type });

  const [question, setQuestion] = useState("…loading");
  const [questionId, setQuestionId] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [cookies, setCookie] = useCookies();
  const [confettiOn, setConfettiOn] = useState(false);
  const [logoClass, setLogoClass] = useState("logo");

  const handleClick = () => () => {
    setCookie(questionId, currentAnswer);
    checkAnswer(questionId, currentAnswer, (data) => {
      setQuestion(data.question);
      setQuestionId(data.id);
      window.flash(data.status.message, data.status.status);
      setCurrentAnswer(cookies[data.id] || "");
      if (data.final_question) {
        setConfettiOn(true);
        setLogoClass("logo-spin");
      }
    });
  };

  useEffect(() => {
    document.cookies = cookies;
    handleClick()();
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
      <Confetti isAnimationEnabled={confettiOn} />
      <header className="App-header">
        <img
          alt="A raccoon slides in from the right"
          src={Logo}
          className={logoClass}
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
