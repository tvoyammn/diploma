import React, { useState, Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getAudios } from "../redux/actions/audioActions";

import Grid from "@material-ui/core/Grid";

//import VideosList from "../components/video/VideosList";
import Audio from "../components/audio/Audio";
//import VideoSkeleton from '../util/VideoSkeleton'

class audios extends Component {
  componentDidMount() {
    this.props.getAudios();
  }

  render() {
    const { audios, loading } = this.props.audioData;
    let recentAudiosMarkup = !loading ? (
      audios.map((audio) => <Audio key={audio.audioId} audio={audio} />)
    ) : (
      <p>Loading...</p>//<VideoSkeleton />
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={4} xs={12}>
          <p>Filter...</p>
        </Grid>
        <Grid item sm={8} xs={12}>
          {recentAudiosMarkup}
        </Grid>
      </Grid>
    );
  }
}

audios.propTypes = {
  getAudios: PropTypes.func.isRequired,
  audioData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  audioData: state.audioData,
});

export default connect(mapStateToProps, { getAudios })(audios);

