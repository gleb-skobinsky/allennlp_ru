import React, { useEffect, useState } from "react";
import ModelRow from "./ModelRow";
import TaskInputComponent from "./TaskPseudoRouter";

export function CurrentTask(thisTask) {
  const focusedStyle = {
    color: "#1a4cae",
    borderBottom: "2px solid",
  };
  const unfocusedStyle = {};
  const [demoFocused, setDemoFocused] = useState(true);
  const [modelCardFocused, setModelCardFocused] = useState(false);
  const [usageFocused, setUsageFocused] = useState(false);

  const [currentTask, setTask] = useState(null);
  const [currentModel, setModel] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
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
      return data;
    }
  };
  useEffect(() => {
    getTask(thisTask);
  }, []);
  function showDemo(event) {
    setDemoFocused(true);
    setModelCardFocused(false);
    setUsageFocused(false);
  }
  function showModelCard(event) {
    setDemoFocused(false);
    setModelCardFocused(true);
    setUsageFocused(false);
  }
  function showUsage(event) {
    setDemoFocused(false);
    setModelCardFocused(false);
    setUsageFocused(true);
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
              style={demoFocused ? focusedStyle : unfocusedStyle}
            >
              Демо
            </div>
            <div
              className="model-option"
              tabIndex="1"
              onClick={(e) => showModelCard(e)}
              style={modelCardFocused ? focusedStyle : unfocusedStyle}
            >
              Карточка модели
            </div>
            <div
              className="model-option"
              tabIndex="1"
              onClick={(e) => showUsage(e)}
              style={usageFocused ? focusedStyle : unfocusedStyle}
            >
              Использование
            </div>
          </div>
          <hr></hr>
          <div style={{ display: demoFocused ? "block" : "none" }}>
            <TaskInputComponent thisTask={currentTask} />
          </div>
          <div style={{ display: modelCardFocused ? "block" : "none" }}>
            Model card
          </div>
          <div style={{ display: usageFocused ? "block" : "none" }}>
            Model usage
          </div>
        </main>
      ) : (
        <main className="task-display">
          <div>Loading...</div>
        </main>
      )}
    </div>
  );
}
