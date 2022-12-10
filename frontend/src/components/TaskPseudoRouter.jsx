import TaskRC from "./TaskRC";

export function TaskInputComponent(thisTask) {
  if (thisTask.thisTask.name == "Понимание прочитанного") {
    return <TaskRC />;
  }
  return null;
}

export default TaskInputComponent;
