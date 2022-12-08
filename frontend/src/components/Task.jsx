<<<<<<< HEAD
import React, { useEffect, useState } from "react";

export function CurrentTask(thisTask) {
  const [currentTask, setTask] = useState(null);
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
  return (
    <div className="column">
      {currentTask ? (
        <main className="task-display">
          <div className="task-title">{currentTask.name}</div>
          <p>{currentTask.description}</p>
        </main>
      ) : (
        <main className="task-display">
          <div>Loading...</div>
        </main>
      )}
    </div>
  );
}
=======
import React, { useEffect, useState } from "react";
class CurrentTask extends React.Component {
  render() {
    return (
      <div className="column">
        {this.props.task.currentTask ? (
          <div>{this.props.task.currentTask.name}</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}
export default CurrentTask;
>>>>>>> 68464d34031e25b641c5b2a3b97dbf6f387fb0ac
