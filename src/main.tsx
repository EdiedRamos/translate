import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./general/styles/index.scss";
import "./general/styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
