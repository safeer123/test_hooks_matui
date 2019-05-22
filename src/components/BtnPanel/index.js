import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { compose } from "recompose";

import { RecordsContext } from "../../logic/recordsContext";
import styles from "./styles";

const presetList = [
  {
    name: "apple",
    description: "A fruit",
    type: "fruit"
  },
  {
    name: "orange",
    description: "A fruit",
    type: "fruit"
  },
  {
    name: "grapes",
    description: "A fruit",
    type: "fruit"
  },
  {
    name: "mango",
    description: "A fruit",
    type: "fruit"
  },
  {
    name: "spinach",
    description: "A vegitable",
    type: "vegitable"
  },
  {
    name: "potato",
    description: "A vegitable",
    type: "vegitable"
  }
];

const BtnConfig = [
  {
    label: "Clear All",
    id: 1
  },
  {
    label: "Add Preset",
    id: 2
  }
];

const BtnPanel = ({ classes }) => {
  const { addRecord, clearAll } = useContext(RecordsContext);
  const handleClick = (id, e) => {
    console.log("clicked " + id);
    switch (id) {
      case 1:
        clearAll();
        break;
      case 2:
        presetList.forEach(item =>
          setTimeout(
            () => addRecord(item.name, item.description, item.type),
            100
          )
        );
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {BtnConfig.map(c => (
        <Button
          size="small"
          variant="contained"
          color="primary"
          className={classes.btnRoot}
          onClick={e => handleClick(c.id, e)}
          // disabled={!s.isEditable}
        >
          {c.label}
        </Button>
      ))}
    </div>
  );
};

export default compose(
  withTheme(),
  withStyles(styles)
)(BtnPanel);
