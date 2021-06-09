import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getModel, clearErrors } from "../../redux/actions/modelActions";

import { Link } from "react-router-dom";

import dayjs from "dayjs";

import { STLViewer } from "react-stl-obj-viewer";

import withStyles from "@material-ui/core/styles/withStyles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import UnfoldMore from "@material-ui/icons/UnfoldMore";
import CloseIcon from "@material-ui/icons/Close";
import ChatIcon from "@material-ui/icons/Chat";

import MyButton from "../../util/MyButton";
import LikeButton from "./LikeButton";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

const styles = (theme) => ({
  ...theme.spreadIt,
  userAdded: {
    display: "flex",
  },
  modelImage: {
    maxWidth: "100%",
    maxHeight: "90%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  dialogContent: {
    padding: 20,
  },
  closeButton: {
    position: "absolute",
    left: "90%",
  },
  expandButton: {
    position: "absolute",
    left: "90%",
  },
  spinnerDiv: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50,
  },
});

class ModelDialog extends Component {
  state = {
    open: false,
    oldPath: "",
    newPath: "",
  };

  componentDidMount() {
    if (this.props.openDialog) {
      this.handleOpen();
    }
  }

  handleOpen = () => {
    let oldPath = window.location.pathname;

    const { userHandle, modelId } = this.props;
    const newPath = `/profile/${userHandle}/model/${modelId}`;

    if (oldPath === newPath) oldPath = `/profile/${userHandle}`;

    window.history.pushState(null, null, newPath);

    this.setState({ open: true, oldPath, newPath });
    this.props.getModel(this.props.modelId);
  };

  handleClose = () => {
    window.history.pushState(null, null, this.state.oldPath);
    this.setState({ open: false });
    this.props.clearErrors();
  };

  render() {
    const {
      classes,
      model: {
        modelId,
        name,
        url,
        createdAt,
        likeCount,
        commentCount,
        userImage,
        userHandle,
        comments,
      },
      UI: { loading },
    } = this.props;

    const dialogMarkup = loading ? (
      <div className={classes.spinnerDiv}>
        <CircularProgress size={200} thickness={2} />
      </div>
    ) : (
      <Grid container spacing={10}>
        <Grid item sm={5}>
        <STLViewer
          onSceneRendered={(element) => {
            console.log(element);
          }}
          sceneClassName="test-scene"
          url={url}
          className="obj"
          modelColor="#FFFFFF"
        />
        </Grid>
        <Grid item sm={7}>
          <Typography variant="h6">{name}</Typography>
          <hr className={classes.invisibleSeparator} />
          <Typography variant="body1">
            Model Descriptionssssssss ssssssssssssssssssssssssssss
            ssssssssssssssssssssssssssss ssssssssssssssssssssssssssss
            ssssssssssssssssssssssssssss ssssssssssssssss
          </Typography>
          <hr className={classes.invisibleSeparator} />
          <Typography
            component={Link}
            color="primary"
            variant="h5"
            to={`/profile/${userHandle}`}
            className={classes.userAdded}
          >
            <Avatar src={userImage} />@{userHandle}
          </Typography>
          <hr className={classes.invisibleSeparator} />
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
          </Typography>
          <hr className={classes.invisibleSeparator} />
          <LikeButton contentId={modelId} contentType={"model"}/>
          <span>{likeCount} likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} comments</span>
        </Grid>
        <hr className={classes.visibleSeparator} />
        <CommentForm contentId={modelId} contentType={"model"}/>
        <Comments comments={comments} />
      </Grid>
    );

    return (
      <Fragment>
        <MyButton
          onClick={this.handleOpen}
          tip="Expand model"
          tipClassName={classes.expandButton}
        >
          <UnfoldMore color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="md"
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogContent className={classes.dialogContent}>
            {dialogMarkup}
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

ModelDialog.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  getModel: PropTypes.func.isRequired,
  modelId: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  model: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  model: state.modelData.model,
  UI: state.UI,
});

const mapActionsToProps = {
  getModel,
  clearErrors,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(ModelDialog));
