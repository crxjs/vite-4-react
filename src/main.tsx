import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createDomElement } from "./createElement";
import "./index.css";

let root = document.getElementById("root") as HTMLElement;
if (!root) {
  root = createDomElement(`<div id="crx-root"></div>`);
  document.body.append(root);
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
