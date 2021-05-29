import "./App.css";
import Bus from "./utils/bus.js";
import React, { useEffect, useState } from "react";
import checkAnswer from "./lib/getAnswer.js";
import Flash from "./Flash.js";
import Logo from "./trashpanda.png";

const App = () => {
  window.flash = (message, type) => Bus.emit("flash", { message, type });

  const [question, setQuestion] = useState("…loading");
  const [questionId, setQuestionId] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const handleClick = () => () => {
    checkAnswer(questionId, currentAnswer, (question, questionId, s = {}) => {
      setCurrentAnswer("");
      setQuestion(question);
      setQuestionId(questionId);
      window.flash(s.message, s.status);
    });
  };

  useEffect(() => {
    checkAnswer(questionId, currentAnswer, (question, questionId) => {
      setQuestion(question);
      setQuestionId(questionId);
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
      <header className="App-header">
        <img src={Logo} className="logo" />
        Trash Panda Online Scavenger Hunt
      </header>
      <Flash />
      <div id="question" dangerouslySetInnerHTML={{ __html: question }} />
      <textarea
        className={type}
        id={questionId}
        onChange={(e) => setCurrentAnswer(e.target.value)}
        value={currentAnswer}
      ></textarea>
      <br />
      <br />
      <button id="Submit" onClick={handleClick()}>
        Check Your Answer
      </button>
    </div>
  );
};

export default App;
