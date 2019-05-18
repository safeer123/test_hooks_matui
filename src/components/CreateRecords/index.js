import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { compose } from "recompose";

import useInputControl from "../../logic/abstract/useInputControl";
import styles from "./styles";

const BtnConfig = [
  {
    label: "Add",
    id: 1
  }
];

const CreateRecords = ({ classes }) => {
  const name = useInputControl("");
  const type = useInputControl("");
  const description = useInputControl("");

  const handleClick = (id, e) => {
    console.log("clicked " + id);
  };
  const enableSubmit = name.value && type.value && description.value;
  return (
    <div className={classes.wrapper}>
      <Typography variant="h6" gutterBottom>
        Add New Record
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
              disabled={!enableSubmit}
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
