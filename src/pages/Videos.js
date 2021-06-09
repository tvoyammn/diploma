import React, { useState, Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getVideos } from "../redux/actions/videoActions";

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Video from "../components/video/Video";
import VideoSkeleton from "../util/VideoSkeleton";

const styles = {
  sort: {
    textTransform: 'none'
  },
};

class videos extends Component {
  state = {
    anchorEl: null,
  };

  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    const { classes } = this.props;
    const { videos, loading } = this.props.videoData;
    let recentVideosMarkup = !loading ? (
      videos.map((video) => <Video key={video.videoId} video={video} />)
    ) : (
      <VideoSkeleton />
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
        <Grid item sm={9} xs={12}>
          {recentVideosMarkup}
        </Grid>
      </Grid>
    );
  }
}

videos.propTypes = {
  classes: PropTypes.object.isRequired,
  getVideos: PropTypes.func.isRequired,
  videoData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  videoData: state.videoData,
});

export default connect(mapStateToProps, { getVideos })(withStyles(styles)(videos));
