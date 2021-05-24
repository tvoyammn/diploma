import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

import EditDetailsButton from "../components/profile/EditDetailsButton";

import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../redux/actions/userActions";
import { getUserVideos } from "../redux/actions/videoActions";

import dayjs from "dayjs";

import withStyles from "@material-ui/core/styles/withStyles";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";
import EditIcon from "@material-ui/icons/Edit";

import Video from "../components/video/Video";
import MyButton from "../util/MyButton";
import UserProfile from "../components/profile/UserProfile";
import VideoSkeleton from '../util/VideoSkeleton'
import ProfileSkeleton from '../util/ProfileSkeleton'

const styles = (theme) => ({
  ...theme.spreadIt
});

class profile extends Component {
  state = {
    profileOwner: null,
    videoIdParam: null
  };

  componentDidMount() {
    const handle = this.props.match.params.handle;
    const videoId = this.props.match.params.videoId;

    if(videoId) this.setState({ videoIdParam: videoId });

    this.props.getUserVideos(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profileOwner: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        authenticated,
      },
    } = this.props;

    const { videoIdParam } = this.state

    const { videos, loading } = this.props.videoData;

    const videosMarkup = loading ? (
      <VideoSkeleton />
    ) : videos === null ? (
      <h1>No videos from this user</h1>
    ) : !videoIdParam ? (
      videos.map((video) => <Video key={video.videoId} video={video} />)
    ) : (
      videos.map(video => {
        if(video.videoId !== videoIdParam)
          return <Video key={video.videoId} video={video} />
        else return <Video key={video.videoId} video={video} openDialog/>
      })
    )

    return (
      <Grid container>
        <Grid item sm={4} />
        <Grid item sm={4}>
          {this.state.profileOwner === null ? (
            <ProfileSkeleton />
          ) : (
            <UserProfile
              profileOwner={this.state.profileOwner}
              handle={handle}
            />
          )}
          {videosMarkup}
        </Grid>
        <Grid item sm={4} />
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  videoData: state.videoData,
});

const mapActionsToProps = { uploadImage, getUserVideos };

profile.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  getUserVideos: PropTypes.func.isRequired,
  videoData: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(profile));
