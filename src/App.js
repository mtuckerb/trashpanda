import "./App.css";
import Bus from "./utils/bus.js";
import React, { useEffect, useState } from "react";
import checkAnswer from "./lib/getAnswer.js";
import Flash from "./Flash.js";

const App = () => {
  window.flash = (message, type = "flash hide-opacity") =>
    Bus.emit("flash", { message, type });

  const [question, setQuestion] = useState("…loading");
  const [questionId, setQuestionId] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const handleClick = () => () => {
    checkAnswer(questionId, currentAnswer, (question, questionId, s = {}) => {
      setCurrentAnswer("");
      setQuestion(question);
      setQuestionId(questionId);
      window.flash(s.message, s.status + " flash hide-opacity");
    });
  };

  useEffect(() => {
    checkAnswer(questionId, currentAnswer, (question, questionId) => {
      setQuestion(question);
      setQuestionId(questionId);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <header className="App-header">Trash Panda Online Scavenger Hunt</header>
      <Flash />
      <div id="question" dangerouslySetInnerHTML={{ __html: question }} />
      <textarea
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
