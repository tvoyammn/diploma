import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { likeVideo, unlikeVideo } from "../redux/actions/dataActions";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import ChatIcon from "@material-ui/icons/Chat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import ReactPlayer from "react-player";

import MyButton from "../util/MyButton";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20,
  },
  image: {
    minWidth: 20,
  },
  content: {
    padding: 25,
  },
  userAdded: {
    display: "flex",
  },
};

class Video extends Component {
  likedVideo = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.videoId === this.props.video.videoId
      )
    )
      return true;
    else return false;
  };

  likeVideo = () => {
    this.props.likeVideo(this.props.video.videoId);
  };

  unlikeVideo = () => {
    this.props.unlikeVideo(this.props.video.videoId);
  };

  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      video: {
        title,
        addedAt,
        userImage,
        userHandle,
        videoId,
        likeCount,
        commentCount,
        url,
      },
      user: { authenticated },
    } = this.props;

    const likeButton = !authenticated ? (
      <MyButton tip="Like">
        <Link to="/login">
          <FavoriteBorder color="primary" />
        </Link>
      </MyButton>
    ) : this.likedVideo() ? (
      <MyButton tip="Undo like" onClick={this.unlikeVideo}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeVideo}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );

    return (
      <Card className={classes.card}>
        <ReactPlayer url={url} controls></ReactPlayer>
        <CardContent className={classes.content}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">
            Video Descriptionssssssss ssssssssssssssssssssssssssss
            ssssssssssssssssssssssssssss ssssssssssssssssssssssssssss
            ssssssssssssssssssssssssssss ssssssssssssssss
          </Typography>

          <Typography
            variant="body2"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
            className={classes.userAdded}
          >
            {" "}
            <Avatar src={userImage} />
            {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {dayjs(addedAt).fromNow()}
          </Typography>
          {likeButton}
          <span>{likeCount} likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} comments</span>
        </CardContent>
      </Card>
    );
  }
}

Video.propTypes = {
  likeVideo: PropTypes.func.isRequired,
  unlikeVideo: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  video: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeVideo,
  unlikeVideo,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Video));
