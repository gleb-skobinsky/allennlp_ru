import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HideOrShowCategory = ({}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [currentTask, setTask] = useState(null);
  const [state, setState] = useState("^");
  const [styleHide, setStyleHide] = useState("block");
  const handleHide = (e) => {
    if (state === "^") {
      setState("v");
      setStyleHide("none");
    } else {
      setState("^");
      setStyleHide("block");
    }
  };

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
    getTask("Понимание прочитанного");
  }, []);
  function CurrentTask(thisTask) {
    useEffect(() => {
      getTask(thisTask);
    }, []);
    return (
      <div className="column">
        {currentTask ? <div>{currentTask.name}</div> : <div>Loading...</div>}
      </div>
    );
  }
  return (
    <div className="columns">
      <div className="column is-one-fifth">
        <div className="category-label" onClick={(e) => handleHide(e)}>
          Ответить на вопрос
          <span className="catChevron">{state}</span>
        </div>
        <div
          className="category-items"
          id="category-question"
          style={{ display: styleHide }}
        >
          <a className="task-label" href="/reading-comprehension">
            Понимание прочитанного
          </a>
          <a className="task-label" href="/visual-question-answering">
            Ответ на вопрос по изображению
          </a>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={CurrentTask("Понимание прочитанного")}
          />
          <Route
            exact
            path="/visual-question-answering"
            element={CurrentTask("Ответ на вопрос об изображении (VQA)")}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default HideOrShowCategory;
