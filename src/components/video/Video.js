import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import ChatIcon from "@material-ui/icons/Chat";

import ReactPlayer from "react-player";

import DeleteVideo from './DeleteVideo'
import VideoDialog from './VideoDialog'

import MyButton from "../../util/MyButton";
import LikeButton from "./LikeButton";

const styles = {
  card: {
    position: 'relative',
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
      user: { authenticated, credentials: { handle } },
    } = this.props;

    

    const deleteButton = authenticated && userHandle === handle ? (
      <DeleteVideo videoId={ videoId }/>
    ) : null

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
            to={`/profile/${userHandle}`}
            color="primary"
            className={classes.userAdded}
          >
            {" "}
            <Avatar src={userImage} />
            {userHandle}
          </Typography>
          {deleteButton}
          <Typography variant="body2" color="textSecondary">
            {dayjs(addedAt).fromNow()}
          </Typography>
          <LikeButton videoId={videoId} />
          <span>{likeCount} likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} comments</span>
          <VideoDialog videoId={videoId} userHandle={userHandle} openDialog={this.props.openDialog} />
        </CardContent>
      </Card>
    );
  }
}

Video.propTypes = {
  user: PropTypes.object.isRequired,
  video: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(
  mapStateToProps
)(withStyles(styles)(Video));
