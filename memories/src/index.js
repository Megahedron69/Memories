import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import "./index.scss";
import App from "./App";
import "flowbite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
