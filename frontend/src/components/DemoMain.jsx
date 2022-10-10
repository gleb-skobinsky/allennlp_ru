import React, { useContext, useEffect, useState } from "react";
import HideOrShowCategory from "./Tasks";

const DemoMain = () => {
  return (
    <>
      <div className="navbar is-info main-navigation">
        <div className="main-title">
          Неофициальное демо AllenNLP для русского языка
        </div>
      </div>
      <div className="box main-upper-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#1A2A33"
          height="22"
          viewBox="0 0 124 22"
          width="124"
        >
          <path d="M19.3,0.4h3.8v16c0,0.6,0.1,1,0.4,1.3c0.3,0.3,0.6,0.5,1.1,0.5c0.2,0,0.5,0,0.8-0.1c0.3-0.1,0.5-0.2,0.8-0.3l0.5,2.9 c-0.5,0.2-1.1,0.4-1.8,0.6c-0.7,0.1-1.3,0.2-1.9,0.2c-1.2,0-2.1-0.3-2.8-1c-0.7-0.6-1-1.5-1-2.7V0.4z" />
          <path d="M27.6,0.4h3.8v16c0,0.6,0.1,1,0.4,1.3c0.3,0.3,0.6,0.5,1.1,0.5c0.2,0,0.5,0,0.8-0.1c0.3-0.1,0.5-0.2,0.8-0.3l0.5,2.9 c-0.5,0.2-1.1,0.4-1.8,0.6c-0.7,0.1-1.3,0.2-1.9,0.2c-1.2,0-2.1-0.3-2.8-1c-0.7-0.6-1-1.5-1-2.7V0.4z" />
          <path d="M42.9,21.6c-1.2,0-2.3-0.2-3.3-0.6c-1-0.4-1.8-1-2.5-1.7c-0.7-0.7-1.2-1.5-1.6-2.5c-0.4-0.9-0.6-1.9-0.6-2.9 c0-1.1,0.2-2.1,0.5-3c0.4-0.9,0.9-1.8,1.6-2.5c0.7-0.7,1.5-1.3,2.5-1.7c1-0.4,2.1-0.6,3.3-0.6c1.2,0,2.3,0.2,3.3,0.6 c1,0.4,1.8,1,2.5,1.7c0.7,0.7,1.2,1.5,1.5,2.5c0.4,0.9,0.5,1.9,0.5,2.9c0,0.2,0,0.5,0,0.7c0,0.2,0,0.4-0.1,0.6H39.1 c0.1,0.6,0.2,1.1,0.4,1.6c0.2,0.5,0.5,0.8,0.9,1.2c0.4,0.3,0.8,0.6,1.2,0.7c0.5,0.2,0.9,0.3,1.4,0.3c0.8,0,1.5-0.2,2.2-0.6 c0.7-0.4,1.1-0.9,1.4-1.5l3.3,0.9c-0.6,1.1-1.4,2.1-2.6,2.8C46,21.2,44.6,21.6,42.9,21.6z M46.8,12.5c-0.1-1.1-0.5-2-1.2-2.7 c-0.7-0.7-1.6-1-2.7-1c-0.5,0-1,0.1-1.4,0.3c-0.4,0.2-0.8,0.4-1.2,0.8c-0.3,0.3-0.6,0.7-0.8,1.2c-0.2,0.5-0.3,1-0.4,1.5H46.8z" />
          <path d="M66.3,21.3h-3.8v-8.4c0-1.2-0.2-2.1-0.6-2.6c-0.4-0.6-1-0.8-1.7-0.8c-0.4,0-0.8,0.1-1.2,0.2c-0.4,0.2-0.8,0.4-1.1,0.6 c-0.4,0.3-0.7,0.6-1,1c-0.3,0.4-0.5,0.8-0.6,1.3v8.7h-3.8v-15h3.5v2.8c0.6-1,1.4-1.7,2.4-2.2c1-0.5,2.2-0.8,3.5-0.8 c0.9,0,1.7,0.2,2.3,0.5c0.6,0.3,1,0.8,1.4,1.3c0.3,0.6,0.5,1.2,0.7,1.9c0.1,0.7,0.2,1.4,0.2,2.1V21.3z" />
          <path d="M72,2.9v18.4h-1V1h0.7l14.9,18.7V1h1v20.3h-1L72,2.9z" />
          <path d="M92.4,21.3V1h1v19.4h12.4v0.9H92.4z" />
          <path d="M109.9,21.3V1h8.3c0.8,0,1.6,0.2,2.3,0.5c0.7,0.4,1.3,0.8,1.8,1.4c0.5,0.6,0.9,1.2,1.2,2c0.3,0.7,0.4,1.5,0.4,2.3 c0,0.8-0.1,1.6-0.4,2.3c-0.3,0.8-0.7,1.4-1.2,2c-0.5,0.6-1.1,1-1.8,1.4c-0.7,0.4-1.4,0.5-2.3,0.5h-7.5v7.8H109.9z M110.9,12.5h7.5 c0.7,0,1.4-0.2,1.9-0.5c0.6-0.3,1.1-0.7,1.5-1.2c0.4-0.5,0.7-1.1,0.9-1.7c0.2-0.6,0.3-1.3,0.3-2c0-0.7-0.1-1.3-0.4-2 c-0.3-0.6-0.6-1.2-1-1.7c-0.4-0.5-0.9-0.9-1.5-1.2c-0.6-0.3-1.2-0.4-1.9-0.4h-7.3V12.5z" />
          <path d="M18.4,4.6c-1.7,0.9-3.3,2-4.9,3.1c0,0,0,0,0,0v0c0,0,0,0,0,0L11,0.4H7.3L0.2,20.8L0,21.5h4.1c0,0,0,0,0.1-0.1 c2-3.2,4.4-6.1,7-8.8l2.9,8.9h4.1L14.2,9.8c1.3-1.2,2.7-2.3,4.2-3.3V4.6z M6.8,13.2l2.3-7.1l1.3,3.9C9.2,11,8,12,6.8,13.2z" />
        </svg>
      </div>

      <HideOrShowCategory />
    </>
  );
};

export default DemoMain;
