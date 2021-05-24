import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { postVideo, clearErrors } from "../../redux/actions/videoActions";

import withStyles from "@material-ui/core/styles/withStyles";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import CloseIcon from "@material-ui/icons/Close";

import MyButton from "../../util/MyButton";

const styles = (theme) => ({
  ...theme.spreadIt,
  submitButton: {
    position: "relative",
    float: "right",
    marginTop: 10,
  },
  progressSpinner: {
    position: "absolute",
  },
  closeButton: {
    position: "absolute",
    left: "91%",
    top: "6%",
  },
});

class UploadVideoDialog extends Component {
  state = {
    videoTitle: "",
    videoUrl: "",
    errors: {},
  };

  handleVideoSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const newVideoData = {
      title: this.state.videoTitle,
      url: this.state.videoUrl,
    };
    this.props.postVideo(newVideoData);
  };

  handleVideoChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({
        videoTitle: "",
        videoUrl: "",
        open: false,
        errors: {},
      });
    }
  }

  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading },
    } = this.props;

    return (
      <Dialog
        open={this.props.videoOpen}
        onClose={this.props.handleVideoClose}
        fullWidth
        maxWidth="sm"
      >
        <MyButton
          tip="Close"
          onClick={this.props.handleVideoClose}
          tipClassName={classes.closeButton}
        >
          <CloseIcon />
        </MyButton>
        <DialogTitle>Post new video</DialogTitle>
        <DialogContent>
          <form onSubmit={this.handleVideoSubmit}>
            <TextField
              name="videoTitle"
              type="text"
              label="Title"
              placeholder="Video title"
              error={errors.title ? true : false}
              helperText={errors.title}
              className={classes.textField}
              onChange={this.handleVideoChange}
              fullWidth
            />
            <TextField
              name="videoUrl"
              type="text"
              label="URL"
              placeholder="Video URL"
              error={errors.url ? true : false}
              helperText={errors.url}
              className={classes.textField}
              onChange={this.handleVideoChange}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
              disabled={loading}
            >
              Submit
              {loading && (
                <CircularProgress
                  size={30}
                  className={classes.progressSpinner}
                />
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
}

UploadVideoDialog.propTypes = {
  postVideo: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  videoOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

const mapActionsToProps = {
  postVideo,
  clearErrors,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(UploadVideoDialog));
