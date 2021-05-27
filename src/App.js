import "./App.css";
import React, { useEffect, useState } from "react";
import checkAnswer from "./lib/getAnswer.js";
import Flash from "./Flash.js";

function App() {
  const [question, setQuestion] = useState("");
  const [questionId, setQuestionId] = useState(1);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => () =>
    checkAnswer(questionId, currentAnswer, (question, questionId, error) => {
      setQuestion(question);
      setQuestionId(questionId);
      setError(error);
    });

  useEffect(() => {
    checkAnswer(questionId, currentAnswer, (question, questionId, error) => {
      setQuestion(question);
      setQuestionId(questionId);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">Trash Panda Online Scavenger Hunt</header>
      <Flash message={error} />
      <h1> {question} </h1>
      <textarea
        id={questionId}
        onChange={(e) => setCurrentAnswer(e.target.value)}
      ></textarea>
      <br />
      <br />
      <button id="Submit" onClick={handleClick()}>
        Check Your Answer
      </button>
    </div>
  );
}

export default App;
