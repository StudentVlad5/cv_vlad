import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AppCV from "./components/AppCV/AppCV.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="">
      <AppCV />
    </BrowserRouter>
  </React.StrictMode>
);
