const checkAnswer = async (question_id, answer, callback) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://localhost:3000",
      mode: "no-cors",
    },
    body: JSON.stringify({ id: question_id, answer: answer }),
  };

  fetch(process.env.REACT_APP_ANSWERS_URL, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      callback(data.question, data.id, data.status);
    });
  return [];
};
export default checkAnswer;
