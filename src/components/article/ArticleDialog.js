import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getArticle, clearErrors } from "../../redux/actions/articleActions";

import { Link } from "react-router-dom";

import dayjs from "dayjs";

import ReactPlayer from "react-player";

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

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const styles = (theme) => ({
  ...theme.spreadIt,
  userAdded: {
    display: "flex",
  },
  articleImage: {
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
    left: "85%",
  },
  spinnerDiv: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  article: {
    align: "center",
    justifyContent: "center",
  },
});

class ArticleDialog extends Component {
  state = {
    open: false,
    oldPath: "",
    newPath: "",
    numPages: null,
    pageNumber: 3,
  };

  componentDidMount() {
    if (this.props.openDialog) {
      this.handleOpen();
    }
  }

  handleOpen = () => {
    let oldPath = window.location.pathname;

    const { userHandle, articleId } = this.props;
    const newPath = `/profile/${userHandle}/article/${articleId}`;

    if (oldPath === newPath) oldPath = `/profile/${userHandle}`;

    window.history.pushState(null, null, newPath);

    this.setState({ open: true, oldPath, newPath });
    this.props.getArticle(this.props.articleId);
  };

  handleClose = () => {
    window.history.pushState(null, null, this.state.oldPath);
    this.setState({ open: false });
    this.props.clearErrors();
  };

  onDocumentLoadSuccess({ numPagess }) {
    //this.setState({numPages: numPagess});
  }

  render() {
    const {
      classes,
      article: {
        articleId,
        title,
        description,
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
      <Fragment>
          <Document
            file="https://firebasestorage.googleapis.com/v0/b/studmedexpert-b931c.appspot.com/o/Medicaljournals.pdf?alt=media&token=f1f6e856-b8f6-49af-ae61-b4ec07806519"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={this.state.pageNumber} width={850}/>
          </Document>
          <hr className={classes.invisibleSeparator} />
          <LikeButton contentId={articleId} contentType={"article"} />
          <span>{likeCount} likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} comments</span>
          <hr className={classes.visibleSeparator} />
          <CommentForm contentId={articleId} contentType={"article"} />
          <Comments comments={comments} />
      </Fragment>
    );

    return (
      <Fragment>
        <MyButton
          onClick={this.handleOpen}
          tip="Expand article"
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

ArticleDialog.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  getArticle: PropTypes.func.isRequired,
  articleId: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  article: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  article: state.articleData.article,
  UI: state.UI,
});

const mapActionsToProps = {
  getArticle,
  clearErrors,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(ArticleDialog));
