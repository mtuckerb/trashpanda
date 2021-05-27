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

  fetch(
    "https://fezokn45b9.execute-api.us-west-1.amazonaws.com/default/trashPanda",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      callback(data.question, data.id, data.status);
    });
  return [];
};
export default checkAnswer;
