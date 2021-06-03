import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import firebase from "../../util/firebase";

import { postModel, clearErrors } from "../../redux/actions/modelActions";

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

class UploadModelDialog extends Component {
  state = {
    modelName: "",
    modelDescription: "",
    modelFileName: "",
    stlModelFile: null,
    errors: {},
  };

  handleModelSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const newModelData = {
      name: this.state.modelName,
      description: this.state.modelDescription,
      modelFileName: this.state.modelFileName,
    };
    this.props.postModel(newModelData);
  };

  onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const modelExtension =
      file.name.split(".")[file.name.split(".").length - 1];
    const modelFileName = `${Math.round(
      Math.random() * 10000000
    ).toString()}.${modelExtension}`;

    this.setState({ modelFileName: modelFileName });
    const fileRef = storageRef.child(modelFileName);
    await fileRef.put(file);
  };

  handleModelChange = (event) => {
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
        open={this.props.modelOpen}
        onClose={this.props.handleModelClose}
        fullWidth
        maxWidth="sm"
      >
        <MyButton
          tip="Close"
          onClick={this.props.handleModelClose}
          tipClassName={classes.closeButton}
        >
          <CloseIcon />
        </MyButton>
        <DialogTitle>Upload model</DialogTitle>
        <DialogContent>
          <form onSubmit={this.handleModelSubmit}>
            <TextField
              name="modelName"
              type="text"
              label="Name"
              placeholder="Model name"
              error={errors.name ? true : false}
              helperText={errors.name}
              className={classes.textField}
              onChange={this.handleModelChange}
              fullWidth
            />
            <TextField
              name="modelDescription"
              type="text"
              label="Description"
              placeholder="Model description"
              multiline
              rows="3"
              error={errors.description ? true : false}
              helperText={errors.description}
              className={classes.textField}
              onChange={this.handleModelChange}
              fullWidth
            />
            <input
              type="file"
              name="obj-file"
              onChange={this.onFileChange}
              placeholder="model"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
              disabled={loading}
            >
              Upload
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

UploadModelDialog.propTypes = {
  postModel: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  modelOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

const mapActionsToProps = {
  postModel,
  clearErrors,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(UploadModelDialog));
