import React from "react";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { compose } from "recompose";

import CustomSelect from "../CustomSelect";

import styles from "./styles";

class Content extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.contentRoot}>
        <div className={classes.wrapper}>
          <CustomSelect
            options={[
              {
                label: "abc",
                value: "abc"
              },
              {
                label: "efg",
                value: "efg"
              }
            ]}
            initVal={{
              label: "abc",
              value: "abc"
            }}
          />
        </div>
      </div>
    );
  }
}
export default compose(
  withTheme(),
  withStyles(styles)
)(Content);
