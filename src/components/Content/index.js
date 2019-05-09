import React from "react";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { compose } from "recompose";

import styles from "./styles";

class Content extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { classes } = this.props;

    return <div className={classes.contentRoot} />;
  }
}
export default compose(
  withTheme(),
  withStyles(styles)
)(Content);
