import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { compose } from "recompose";

import styles from "./styles";

const BtnConfig = [
  {
    label: "RESET",
    id: 1
  },
  {
    label: "PRESET SAMPLES",
    id: 2
  }
];

class BtnPanel extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  handleClick = (id, e) => {
    console.log("clicked " + id);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
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
)(BtnPanel);
