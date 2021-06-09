import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { STLViewer } from "react-stl-obj-viewer";

import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import ChatIcon from "@material-ui/icons/Chat";

import ReactPlayer from "react-player";

import DeleteModel from "./DeleteModel";
import ModelDialog from "./ModelDialog";

 import MyButton from "../../util/MyButton";
 import LikeButton from "./LikeButton";

const styles = {
  card: {
    position: "relative",
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

class Model extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      model: {
        name,
        description,
        createdAt,
        userImage,
        userHandle,
        modelId,
        likeCount,
        commentCount,
        url,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

     const deleteButton = authenticated && userHandle === handle ? (
       <DeleteModel modelId={ modelId }/>
     ) : null

    return (
      <Card className={classes.card}>
        <STLViewer
          onSceneRendered={(element) => {
            console.log(element);
          }}
          sceneClassName="test-scene"
          url={url}
          className="obj"
          modelColor="#FFFFFF"
        />
        <CardContent className={classes.content}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">{description}</Typography>

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
            {dayjs(createdAt).fromNow()}
          </Typography>
          <LikeButton contentId={modelId} contentType={"model"} />
          <span>{likeCount} likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} comments</span>
          <ModelDialog
            modelId={modelId}
            userHandle={userHandle}
            openDialog={this.props.openDialog}
          />
        </CardContent>
      </Card>
    );
  }
}

Model.propTypes = {
  user: PropTypes.object.isRequired,
  model: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Model));
