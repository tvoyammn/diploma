import React, { useState, Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getModels } from "../redux/actions/modelActions";

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Model from "../components/model/Model";
import VideoSkeleton from '../util/VideoSkeleton'

const styles = {
  sort: {
    textTransform: 'none'
  },
};

class models extends Component {
  componentDidMount() {
    this.props.getModels();
  }

  render() {
    const { classes } = this.props;
    const { models, loading } = this.props.modelData;
    let recentModelsMarkup = !loading ? (
      models.map((model) => <Model key={model.modelId} model={model} />)
    ) : (
      <p>Loading...</p>//<VideoSkeleton />
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={3} xs={12}>
          <Grid container>
            <Grid item sm={5}>
              <Typography variant="subtitle1">Sort by</Typography>
            </Grid>
            <Grid item sm={7}>
              <Button size="small" variant="outlined" className={classes.sort}>
                <Typography variant="body2">most recent</Typography>
                <ArrowDropDownIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={8} xs={12}>
          {recentModelsMarkup}
        </Grid>
      </Grid>
    );
  }
}

models.propTypes = {
  classes: PropTypes.object.isRequired,
  getModels: PropTypes.func.isRequired,
  modelData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  modelData: state.modelData,
});

export default connect(mapStateToProps, { getModels })(withStyles(styles)(models));