import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { postAudio, clearErrors } from "../../redux/actions/audioActions";

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

class UploadAudioDialog extends Component {
  state = {
    audioTitle: "",
    audioDescription: '',
    audioUrl: "",
    errors: {},
  };

  handleAudioSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const newAudioData = {
      title: this.state.audioTitle,
      description: this.state.audioDescription,
      url: this.state.audioUrl,
    };
    this.props.postAudio(newAudioData);
  };

  handleAudioChange = (event) => {
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
        audioTitle: "",
        audioDescription: '',
        audioUrl: "",
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
        open={this.props.audioOpen}
        onClose={this.props.handleAudioClose}
        fullWidth
        maxWidth="sm"
      >
        <MyButton
          tip="Close"
          onClick={this.props.handleAudioClose}
          tipClassName={classes.closeButton}
        >
          <CloseIcon />
        </MyButton>
        <DialogTitle>Post new audio</DialogTitle>
        <DialogContent>
          <form onSubmit={this.handleAudioSubmit}>
            <TextField
              name="audioTitle"
              type="text"
              label="Title"
              placeholder="Audio title"
              error={errors.title ? true : false}
              helperText={errors.title}
              className={classes.textField}
              onChange={this.handleAudioChange}
              fullWidth
            />
            <TextField
              name="audioDescription"
              type="text"
              label="Description"
              multiline
              rows={3}
              placeholder="Video description"
              error={errors.description ? true : false}
              helperText={errors.description}
              className={classes.textField}
              onChange={this.handleAudioChange}
              fullWidth
            />
            <TextField
              name="audioUrl"
              type="text"
              label="URL"
              placeholder="Audio URL"
              error={errors.url ? true : false}
              helperText={errors.url}
              className={classes.textField}
              onChange={this.handleAudioChange}
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

UploadAudioDialog.propTypes = {
  postAudio: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  audioOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

const mapActionsToProps = {
  postAudio,
  clearErrors,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(UploadAudioDialog));
