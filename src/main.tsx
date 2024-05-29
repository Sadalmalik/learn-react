import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./pages/App.tsx";
import TestMUI from "./pages/TestMUI.tsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TestMUI />
  </React.StrictMode>
);
