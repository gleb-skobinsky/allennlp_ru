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
