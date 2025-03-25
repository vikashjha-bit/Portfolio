import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "@fontsource/outfit"; // Defaults to 400 weight
import "@fontsource/outfit/400.css"; // Optional for specifying styles


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);