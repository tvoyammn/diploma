import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import ChatIcon from "@material-ui/icons/Chat";

//import DeleteAudio from './DeleteAudio'
//import AudioDialog from './AudioDialog'

import MyButton from "../../util/MyButton";
//import LikeButton from "./LikeButton";

import articleImage from '../../images/articleImage.png'

const styles = {
  card: {
    position: 'relative',
    display: "flex",
    marginBottom: 20,
    maxWidth: 345,
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
  media: {
    height: 140,
  }
};

class Article extends Component {

  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      article: {
        title,
        description,
        body,
        createdAt,
        userImage,
        userHandle,
        articleId,
        likeCount,
        commentCount,
      },
      user: { authenticated, credentials: { handle } },
    } = this.props;

    

//    const deleteButton = authenticated && userHandle === handle ? (
//      <DeleteVideo videoId={ videoId }/>
//    ) : null

    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={articleImage}>
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">
            {description}
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
          {/* {deleteButton} */}
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          {/* <LikeButton contentId={videoId} contentType={"video"}/>
          <span>{likeCount} likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} comments</span>
          <VideoDialog videoId={videoId} userHandle={userHandle} openDialog={this.props.openDialog} /> */}
        </CardContent>
      </Card>
    );
  }
}

Article.propTypes = {
  user: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(
  mapStateToProps
)(withStyles(styles)(Article));
