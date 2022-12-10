import React, { useState } from "react";

export function TaskRC() {
  const [passage, setPassage] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const handleRunRCModel = async (e) => {
    e.preventDefault();
    setAnswer("Loading...");
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        passage: passage,
        question: question,
      }),
    };
    console.log(requestOptions);
    const response = await fetch(
      "/api/run/reading-comprehension",
      requestOptions
    );
    if (!response.ok) {
      window.alert("Error occurred while running the model");
    } else {
      console.log(response);
      response.json().then((data) => {
        setAnswer("Ответ: " + data.answer);
      });
    }
  };
  return (
    <div className="rc-task-demo">
      <div className="text-input-label">Отрывок</div>
      <textarea
        className="textarea"
        onChange={(e) => setPassage(e.target.value)}
      ></textarea>
      <div className="text-input-label">Вопрос</div>
      <input
        type="text"
        className="input"
        onChange={(e) => setQuestion(e.target.value)}
      ></input>
      <div className="model-output">
        {answer === "Loading..." ? (
          <div class="column has-text-centered">
            <div class="load"></div>
          </div>
        ) : (
          <div>{answer}</div>
        )}
      </div>
      <button
        className="button run-model is-info app-color"
        onClick={handleRunRCModel}
      >
        Запустить модель
      </button>
    </div>
  );
}

export default TaskRC;
