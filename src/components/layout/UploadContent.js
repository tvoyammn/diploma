import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { postVideo, clearErrors } from "../../redux/actions/dataActions";

import withStyles from "@material-ui/core/styles/withStyles";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import DescriptionIcon from "@material-ui/icons/Description";

import MyButton from "../../util/MyButton";

const styles = {
  //...theme,
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
};



class UploadContent extends Component {
  state = {
    anchorEl: null,
    videoOpen: false,
    audioOpen: false,
    articleOpen: false,
    title: "",
    url: "",
    errors: {},
  };

  handleUploadMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleUploadMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleVideoOpen = () => {
    this.setState({ videoOpen: true });
    this.handleUploadMenuClose();
  };

  handleVideoClose = () => {
    this.props.clearErrors();
    this.setState({ videoOpen: false, errors: {} });
  };

  handleVideoSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const newVideoData = {
      title: this.state.title,
      url: this.state.url,
    };
    this.props.postVideo(newVideoData);
  };

  handleAudioOpen = () => {
    this.setState({ audioOpen: true });
  };

  handleAudioClose = () => {
    this.setState({ audioOpen: false });
  };

  handleArticleOpen = () => {
    this.setState({ articleOpen: true });
  };

  handleArticleClose = () => {
    this.setState({ articleOpen: false });
  };

  handleChange = (event) => {
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
        title: "",
        url: "",
        videoOpen: false,
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

    const UploadMenu = withStyles({
      paper: {
        border: "1px solid #d3d4d5",
      },
    })((props) => (
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        {...props}
      />
    ));
    
    const UploadMenuItem = withStyles((theme) => ({
      root: {
        "&:focus": {
          backgroundColor: theme.palette.primary.main,
          "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
            color: theme.palette.common.white,
          },
        },
      },
    }))((props) => <MenuItem {...props} />);

    return (
      <Fragment>
        <MyButton tip="Upload material" onClick={this.handleUploadMenu}>
          <AddIcon />
        </MyButton>
        <UploadMenu
          id="upload-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleUploadMenuClose}
        >
          <UploadMenuItem onClick={this.handleVideoOpen}>
            <ListItemIcon>
              <VideoCallIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Upload video" />
          </UploadMenuItem>
          <Dialog
            open={this.state.videoOpen}
            onClose={this.handleVideoClose}
            fullWidth
            maxWidth="sm"
          >
            <MyButton
              tip="Close"
              onClick={this.handleVideoClose}
              tipClassName={classes.closeButton}
            >
              <CloseIcon />
            </MyButton>
            <DialogTitle>Post new video</DialogTitle>
            <DialogContent>
              <form onSubmit={this.handleVideoSubmit}>
                <TextField
                  name="title"
                  type="text"
                  label="Title"
                  placeholder="Video title"
                  error={errors.title ? true : false}
                  helperText={errors.title}
                  className={classes.textField}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  name="url"
                  type="text"
                  label="URL"
                  placeholder="Video URL"
                  error={errors.url ? true : false}
                  helperText={errors.url}
                  className={classes.textField}
                  onChange={this.handleChange}
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
          <UploadMenuItem>
            <ListItemIcon>
              <AudiotrackIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Upload audio" />
          </UploadMenuItem>
          <UploadMenuItem>
            <ListItemIcon>
              <DescriptionIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Upload article" />
          </UploadMenuItem>
        </UploadMenu>
      </Fragment>
    );
  }
}

UploadContent.propTypes = {
  postVideo: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
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
)(withStyles(styles)(UploadContent));
