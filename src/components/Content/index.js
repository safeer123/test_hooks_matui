import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { compose } from "recompose";

import CustomSelect from "../CustomSelect";
import { RecordsConsumer } from "../../logic/recordsContext";

import styles from "./styles";

class Content extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <div className={classes.contentRoot}>
        <Typography variant="h6" gutterBottom>
          Records ({this.props.records.length})
        </Typography>
        <div className={classes.wrapper}>
          <CustomSelect
            options={this.props.records}
            initVal={this.props.records[0] || null}
          />
        </div>
      </div>
    );
  }
}
export default compose(
  RecordsConsumer,
  withTheme(),
  withStyles(styles)
)(Content);
