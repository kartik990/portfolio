import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

function zoom() {
  document.body.style.zoom = "90%";
}
zoom();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
