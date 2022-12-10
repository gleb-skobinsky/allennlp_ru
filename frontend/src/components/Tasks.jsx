import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrentTask } from "./Task";

const HideOrShowCategory = ({}) => {
  const [state, setState] = useState("^");
  const [stateSentence, setStateSentence] = useState("^");
  const [styleHide, setStyleHide] = useState("block");
  const [styleHideSentence, setStyleHideSentence] = useState("block");
  let activeColorRC = "white";
  let activeBorderRC = 0;
  let activeColorVQA = "white";
  let activeBorderVGA = 0;
  let activeColorNER = "white";
  let activeBorderNER = 0;
  let activeColorOIE = "white";
  let activeBorderOIE = 0;
  const handleHide = (e) => {
    if (state === "^") {
      setState("v");
      setStyleHide("none");
    } else {
      setState("^");
      setStyleHide("block");
    }
  };
  const handleHideSentence = (e) => {
    if (stateSentence === "^") {
      setStateSentence("v");
      setStyleHideSentence("none");
    } else {
      setStateSentence("^");
      setStyleHideSentence("block");
    }
  };
  if (window.location.pathname.includes("reading-comprehension")) {
    activeColorRC = "#F0F7FFFF";
    activeBorderRC = "4px solid";
  } else if (window.location.pathname.includes("visual-question-answering")) {
    activeColorVQA = "#F0F7FFFF";
    activeBorderVGA = "4px solid";
  } else if (window.location.pathname.includes("named-entity-recognition")) {
    activeColorNER = "#F0F7FFFF";
    activeBorderNER = "4px solid";
  } else if (window.location.pathname.includes("open-information-extraction")) {
    activeColorOIE = "#F0F7FFFF";
    activeBorderOIE = "4px solid";
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
          <a
            className="task-label"
            href="/reading-comprehension"
            style={{
              backgroundColor: activeColorRC,
              borderRight: activeBorderRC,
            }}
          >
            Понимание прочитанного
          </a>
          <a
            className="task-label"
            href="/visual-question-answering"
            style={{
              backgroundColor: activeColorVQA,
              borderRight: activeBorderVGA,
            }}
          >
            Ответ на вопрос по изображению
          </a>
        </div>
        <div className="category-label" onClick={(e) => handleHideSentence(e)}>
          Аннотировать предложение
          <span className="catChevron">{stateSentence}</span>
        </div>
        <div
          className="category-items"
          id="category-question"
          style={{ display: styleHideSentence }}
        >
          <a
            className="task-label"
            href="/named-entity-recognition"
            style={{
              backgroundColor: activeColorNER,
              borderRight: activeBorderNER,
            }}
          >
            Распознавание именованных сущностей
          </a>
          <a
            className="task-label"
            href="/open-information-extraction"
            style={{
              backgroundColor: activeColorOIE,
              borderRight: activeBorderOIE,
            }}
          >
            Извлечение открытой информации
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
            path="/reading-comprehension"
            element={CurrentTask("Понимание прочитанного")}
          />
          <Route
            exact
            path="/visual-question-answering"
            element={CurrentTask("Ответ на вопрос об изображении (VQA)")}
          />
          <Route
            exact
            path="/named-entity-recognition"
            element={CurrentTask("Распознавание именованных сущностей")}
          />
          <Route
            exact
            path="/open-information-extraction"
            element={CurrentTask("Извлечение открытой информации")}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default HideOrShowCategory;
