import React, { useState } from "react";

import DemoMain from "./components/DemoMain";

const App = () => {
  const [message, setMessage] = useState("");
  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/docs", requestOptions);

    if (!response.ok) {
      console.log("something messed up");
    } else {
      setMessage("API ready. Response ok.");
    }
  };
  getWelcomeMessage();

  return (
    <>
      <DemoMain />
    </>
  );
};

export default App;
