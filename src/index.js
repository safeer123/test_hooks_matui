import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";

import BtnPanel from "./components/BtnPanel";
import Content from "./components/Content";
import CreateRecords from "./components/CreateRecords";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Typography variant="h4" gutterBottom>
        Test App (09-05-2019)
      </Typography>
      <BtnPanel />
      <Content />
      <CreateRecords />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
