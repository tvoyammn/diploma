import React, { useState, Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getModels } from "../redux/actions/modelActions";

import Grid from "@material-ui/core/Grid";

import VideosList from "../components/video/VideosList";
import Model from "../components/model/Model";
import VideoSkeleton from '../util/VideoSkeleton'

class models extends Component {
  componentDidMount() {
    this.props.getModels();
  }

  render() {
    const { models, loading } = this.props.modelData;
    let recentModelsMarkup = !loading ? (
      models.map((model) => <Model key={model.modelId} model={model} />)
    ) : (
      <p>Loading...</p>//<VideoSkeleton />
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={4} xs={12}>
          <p>Filter...</p>
        </Grid>
        <Grid item sm={8} xs={12}>
          {recentModelsMarkup}
        </Grid>
      </Grid>
    );
  }
}

models.propTypes = {
  getModels: PropTypes.func.isRequired,
  modelData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  modelData: state.modelData,
});

export default connect(mapStateToProps, { getModels })(models);