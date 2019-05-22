import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { compose } from "recompose";

import { RecordsContext } from "../../logic/recordsContext";
import useInputControl from "../../logic/abstract/useInputControl";
import styles from "./styles";

const BtnConfig = [
  {
    label: "Delete",
    id: 1
  },
  {
    label: "Add",
    id: 2
  }
];

const CreateRecords = ({ classes }) => {
  const name = useInputControl("");
  const type = useInputControl("");
  const description = useInputControl("");
  const { addRecord, deleteRecord } = useContext(RecordsContext);

  const handleClick = (id, e) => {
    // console.log("clicked " + id);
    switch (id) {
      case 1:
        deleteRecord(name.value, description.value, type.value);
        break;
      case 2:
        addRecord(name.value, description.value, type.value);
        break;
      default:
        break;
    }
    name.reset();
    description.reset();
    type.reset();
  };
  const enableSubmit = id => {
    switch (id) {
      case 1:
        return name.value || type.value || description.value;
      case 2:
        return name.value && type.value && description.value;
      default:
        break;
    }
    return false;
  };

  return (
    <div className={classes.wrapper}>
      <Typography variant="h6" gutterBottom>
        Add/Delete Record
      </Typography>
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.formWrapper}>
          <TextField
            fullWidth
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
            {...name}
          />

          <TextField
            fullWidth
            id="standard-name"
            label="Description"
            className={classes.textField}
            margin="normal"
            {...description}
          />

          <TextField
            fullWidth
            id="standard-name"
            label="Type"
            className={classes.textField}
            margin="normal"
            {...type}
          />
          {BtnConfig.map(c => (
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={classes.btnRoot}
              onClick={e => handleClick(c.id, e)}
              disabled={!enableSubmit(c.id)}
              // disabled={!s.isEditable}
            >
              {c.label}
            </Button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default compose(
  withTheme(),
  withStyles(styles)
)(CreateRecords);
