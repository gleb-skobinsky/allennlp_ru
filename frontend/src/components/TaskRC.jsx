import React, { useEffect, useState } from "react";
import ModelRow from "./ModelRow";

export function TaskInputComponent(thisTask) {
  if (thisTask.thisTask.name == "Понимание прочитанного") {
    return (
      <div className="rc-task-demo">
        <div className="text-input-label">Отрывок</div>
        <textarea className="textarea"></textarea>
        <div className="text-input-label">Вопрос</div>
        <input type="text" className="input"></input>
        <button className="button run-model is-info app-color">
          Запустить модель
        </button>
      </div>
    );
  }
  return null;
}

export default TaskInputComponent;
