import React from "react";
import ReactDOM from "react-dom";

import BtnPanel from "./components/BtnPanel";
import Content from "./components/Content";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Test App (09-05-2019)</h1>
      <BtnPanel />
      <Content />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
