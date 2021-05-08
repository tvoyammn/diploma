import React, { Component } from "react";

import { Link } from 'react-router-dom'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import ReactPlayer from "react-player";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20
  },
  image: {
    minWidth: 20,
  },
  content: {
    padding: 25
  },
  userAdded: {
    display: "flex"
  }
};

class Video extends Component {
  render() {
    dayjs.extend(relativeTime)
    const { classes, video: { title, addedAt, userImage, userHandle, videoId, likeCount, commentCount, url }} = this.props;
    return (
      <Card className={classes.card}>
        <ReactPlayer url={url} controls></ReactPlayer>
        <CardContent className={classes.content}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">Video Descriptionssssssss
                                            ssssssssssssssssssssssssssss
                                            ssssssssssssssssssssssssssss
                                            ssssssssssssssssssssssssssss
                                            ssssssssssssssssssssssssssss
                                            ssssssssssssssss</Typography>
          
          <Typography variant="body2" component={Link} to={`/users/${userHandle}`} color="primary" className={classes.userAdded}> <Avatar src={userImage} />{userHandle}</Typography>
          <Typography variant="body2" color="textSecondary">{dayjs(addedAt).fromNow()}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Video);
