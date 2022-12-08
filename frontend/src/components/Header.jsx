<<<<<<< HEAD
import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";

const Header = ({ title }) => {
  const [token, setToken] = useContext(UserContext);

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div className="has-text-centered m-6">
      <h1 className="title">{title}</h1>
      {token && (
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
=======
import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";

const Header = ({ title }) => {
  const [token, setToken] = useContext(UserContext);

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div className="has-text-centered m-6">
      <h1 className="title">{title}</h1>
      {token && (
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
>>>>>>> 68464d34031e25b641c5b2a3b97dbf6f387fb0ac
