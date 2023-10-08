import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./components/app-container.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
