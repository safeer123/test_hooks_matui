import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { compose } from "recompose";

import styles from "./styles";

const BtnConfig = [
  {
    label: "Add",
    id: 1
  }
];

class CreateRecords extends React.Component {
  state = {
    name: ""
  };

  componentDidMount() {}

  componentWillUnmount() {}

  handleClick = (id, e) => {
    console.log("clicked " + id);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
          />
        </form>
        {BtnConfig.map(c => (
          <Button
            size="small"
            variant="contained"
            color="primary"
            className={classes.btnRoot}
            onClick={e => this.handleClick(c.id, e)}
            // disabled={!s.isEditable}
          >
            {c.label}
          </Button>
        ))}
      </div>
    );
  }
}
export default compose(
  withTheme(),
  withStyles(styles)
)(CreateRecords);
