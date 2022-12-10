import React, { useEffect, useState } from "react";
import ModelRow from "./ModelRow";
import TaskInputComponent from "./TaskPseudoRouter";

export function CurrentTask(thisTask) {
  const [styleDemo, setStyleDemo] = useState("block");
  const [styleModelCard, setStyleModelCard] = useState("none");
  const [styleUsage, setStyleUsage] = useState("none");
  const [currentTask, setTask] = useState(null);
  const [currentModel, setModel] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);
  const getTask = async (taskname) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `/api/tasks-by-name/${taskname}`,
      requestOptions
    );
    if (!response.ok) {
      setErrorMessage("Something went wrong. Couldn't load the task.");
    } else {
      const data = await response.json();
      setTask(data);
      setLoaded(true);
      return data;
    }
  };
  useEffect(() => {
    getTask(thisTask);
  }, []);
  function showDemo(event) {
    setStyleDemo("block");
    setStyleModelCard("none");
    setStyleUsage("none");
  }
  function showModelCard(event) {
    setStyleDemo("none");
    setStyleModelCard("block");
    setStyleUsage("none");
  }
  function showUsage(event) {
    setStyleDemo("none");
    setStyleModelCard("none");
    setStyleUsage("block");
  }
  return (
    <div className="column">
      {currentTask ? (
        <main className="task-display">
          <div className="task-title">{currentTask.name}</div>
          <p>{currentTask.description}</p>
          <div className="model-header">Модель</div>
          <div>
            {currentTask.models.map(function (object, i) {
              return <ModelRow obj={object} key={i} />;
            })}
          </div>
          <div className="columns model-options">
            <div
              className="model-option"
              tabIndex="1"
              onClick={(e) => showDemo(e)}
            >
              Демо
            </div>
            <div
              className="model-option"
              tabIndex="1"
              onClick={(e) => showModelCard(e)}
            >
              Карточка модели
            </div>
            <div
              className="model-option"
              tabIndex="1"
              onClick={(e) => showUsage(e)}
            >
              Использование
            </div>
          </div>
          <hr></hr>
          <div style={{ display: styleDemo }}>
            <TaskInputComponent thisTask={currentTask} />
          </div>
          <div style={{ display: styleModelCard }}>Model card</div>
          <div style={{ display: styleUsage }}>Model usage</div>
        </main>
      ) : (
        <main className="task-display">
          <div>Loading...</div>
        </main>
      )}
    </div>
  );
}
