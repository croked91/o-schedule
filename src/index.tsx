import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import App from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Outlet />
  </React.StrictMode>
);
