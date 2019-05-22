import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";

import BtnPanel from "./components/BtnPanel";
import Content from "./components/Content";
import CreateRecords from "./components/CreateRecords";
import { RecordsProvider } from "../src/logic/recordsContext";

import "./styles.css";

function App() {
  return (
    <RecordsProvider>
      <div className="App">
        <Typography variant="h4" gutterBottom>
          Test App (09-05-2019)
        </Typography>
        <BtnPanel />
        <Content />
        <CreateRecords />
      </div>
    </RecordsProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
