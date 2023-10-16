import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import MemoApp from "./MemoApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <MemoApp/>
  </React.StrictMode>
);
