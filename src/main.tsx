import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Background from "./components/Background";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Background />
  </React.StrictMode>
);
