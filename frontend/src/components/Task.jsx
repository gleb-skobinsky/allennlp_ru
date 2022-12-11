import React, { useEffect, useState } from "react";
import TaskInputComponent from "./TaskPseudoRouter";
import ModelCard from "./ModelCardComponent";

export function CurrentTask(thisTask) {
  const focusedStyle = {
    color: "#1a4cae",
    borderBottom: "2px solid",
  };
  const unfocusedStyle = {};
  const [demoFocused, setDemoFocused] = useState(true);
  const [modelCardFocused, setModelCardFocused] = useState(false);
  const [usageFocused, setUsageFocused] = useState(false);
  const [dropDownVisible, setVisibility] = useState("none");

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
      if (typeof data.models[0] !== "undefined" && data.models[0] != null) {
        setModel(data.models[0]);
      }
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
  function handleSetModel(event) {
    setVisibility("none");
    if (typeof currentTask.models[event.id] !== "undefined") {
      setModel(currentTask.models[event.id]);
    }
  }
  return (
    <div className="column">
      {currentTask ? (
        <main className="task-display">
          <div className="task-title">{currentTask.name}</div>
          <p>{currentTask.description}</p>
          <div className="model-header">Модель</div>
          <div>
            {typeof currentTask.models[0] !== "undefined" ? (
              <div className="dropdown is-active">
                <div
                  className="dropdown-trigger"
                  onClick={(e) =>
                    dropDownVisible === "none"
                      ? setVisibility("block")
                      : setVisibility("none")
                  }
                >
                  <button
                    className="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                  >
                    <span>
                      {currentModel != null ? currentModel.model_name : null}
                    </span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div
                  className="dropdown-menu"
                  id="dropdown-menu"
                  role="menu"
                  style={{ display: dropDownVisible }}
                >
                  <div className="dropdown-content">
                    {currentTask.models.map(function (object, key) {
                      return (
                        <a
                          className="dropdown-item"
                          id={key}
                          onClick={(e) => handleSetModel(e.target)}
                        >
                          {object.model_name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="columns model-options">
            <div
              className="model-option"
              tabIndex="1"
              onClick={(e) => showDemo(e)}
              style={demoFocused ? focusedStyle : unfocusedStyle}
            >
              <span className="model-option-label">Демо</span>
            </div>
            <div
              className="model-option"
              tabIndex="1"
              onClick={(e) => showModelCard(e)}
              style={modelCardFocused ? focusedStyle : unfocusedStyle}
            >
              <span className="model-option-label">Карточка модели</span>
            </div>
            <div
              className="model-option"
              tabIndex="1"
              onClick={(e) => showUsage(e)}
              style={usageFocused ? focusedStyle : unfocusedStyle}
            >
              <span className="model-option-label">Использование</span>
            </div>
          </div>
          <hr></hr>
          <div style={{ display: demoFocused ? "block" : "none" }}>
            <TaskInputComponent thisTask={currentTask} />
          </div>
          <div style={{ display: modelCardFocused ? "block" : "none" }}>
            <ModelCard model={currentModel} />
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
