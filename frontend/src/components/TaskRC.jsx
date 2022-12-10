import React, { useEffect, useState } from "react";

export function TaskRC() {
  const [passage, setPassage] = useState("");
  const [question, setQuestion] = useState("");
  const handleRunRCModel = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        passage: passage,
        question: question,
      }),
    };
    const response = await fetch(
      "/api/run/reading-comprehension",
      requestOptions
    );
    if (!response.ok) {
      window.alert("Error occurred while running the model");
    } else {
      window.alert("Model run ok!");
    }
  };
  return (
    <div className="rc-task-demo">
      <div
        className="text-input-label"
        onChange={(e) => setPassage(e.target.value)}
      >
        Отрывок
      </div>
      <textarea className="textarea"></textarea>
      <div
        className="text-input-label"
        onChange={(e) => setQuestion(e.target.value)}
      >
        Вопрос
      </div>
      <input type="text" className="input"></input>
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
