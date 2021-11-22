import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.renderDogs = (containerId) => {
  console.log("🚀 ~ containerId render", containerId);
  ReactDOM.render(<App />, document.getElementById(containerId));
};

window.unmountDogs = (ref) => {
  ReactDOM.unmountComponentAtNode(ref);
};

if (!document.getElementById("Dogs-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
