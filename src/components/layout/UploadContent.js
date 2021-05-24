import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { postVideo, clearErrors } from "../../redux/actions/videoActions";
import { postModel } from "../../redux/actions/modelActions";

import withStyles from "@material-ui/core/styles/withStyles";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import DescriptionIcon from "@material-ui/icons/Description";
import CategoryIcon from "@material-ui/icons/Category";

import MyButton from "../../util/MyButton";

import UploadVideoDialog from "./UploadVideoDialog";
import UploadModelDialog from "./UploadModelDialog";
import UploadAudioDialog from './UploadAudioDialog'

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

class UploadContent extends Component {
  state = {
    anchorEl: null,
    videoOpen: false,
    audioOpen: false,
    articleOpen: false,
    modelOpen: false,
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

  handleModelOpen = () => {
    this.setState({ modelOpen: true });
    this.handleUploadMenuClose();
  };

  handleModelClose = () => {
    this.props.clearErrors();
    this.setState({ modelOpen: false, errors: {} });
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

  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading },
    } = this.props;

    return (
      <Fragment>
        <MyButton tip="Upload material" onClick={this.handleUploadMenu}>
          <AddIcon />
        </MyButton>
        <Menu
          id="upload-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleUploadMenuClose}
        >
          <MenuItem onClick={this.handleVideoOpen}>
            <ListItemIcon>
              <VideoCallIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Upload video" />
          </MenuItem>
          <UploadVideoDialog
            videoOpen={this.state.videoOpen}
            handleVideoClose={this.handleVideoClose}
          />
          <MenuItem>
            <ListItemIcon>
              <AudiotrackIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Upload audio" />
          </MenuItem>
          <UploadAudioDialog
            audioOpen={this.state.audioOpen}
            handleAudioClose={this.handleAudioClose}
          />
          <MenuItem>
            <ListItemIcon>
              <DescriptionIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Upload article" />
          </MenuItem>
          <MenuItem onClick={this.handleModelOpen}>
            <ListItemIcon>
              <CategoryIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Upload model" />
          </MenuItem>
          <UploadModelDialog
            modelOpen={this.state.modelOpen}
            handleModelClose={this.handleModelClose}
          />
        </Menu>
      </Fragment>
    );
  }
}

UploadContent.propTypes = {
  postVideo: PropTypes.func.isRequired,
  postModel: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

const mapActionsToProps = {
  postVideo,
  postModel,
  clearErrors,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(UploadContent));

// const UploadMenu = withStyles({
//   paper: {
//     border: "1px solid #d3d4d5",
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "center",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "center",
//     }}
//     {...props}
//   />
// ));

// const UploadMenuItem = withStyles((theme) => ({
//   root: {
//     "&:focus": {
//       backgroundColor: theme.palette.primary.main,
//       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))((props) => <MenuItem {...props} />);
