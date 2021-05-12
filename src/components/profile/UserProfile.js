import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { uploadImage } from "../../redux/actions/userActions";

import { Link } from "react-router-dom";

import dayjs from "dayjs";

import withStyles from "@material-ui/core/styles/withStyles";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";
import EditIcon from "@material-ui/icons/Edit";

import MyButton from "../../util/MyButton";
import EditDetailsButton from "./EditDetailsButton";

const styles = (theme) => ({
  paper: {
    padding: 20,
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%",
      },
    },
    "& .profile-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%",
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle",
      },
      "& a": {
        color: theme.palette.primary.main,
      },
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0",
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px",
    },
  },
});

class UserProfile extends Component {
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  render() {
    const { classes, profileOwner, handle } = this.props;

    return (
      <Paper className={classes.paper}>
        <div className={classes.profile}>
          <div className="image-wrapper">
            <img
              src={profileOwner.imageUrl}
              alt="profile"
              className="profile-image"
            />
            {profileOwner.handle === handle ? (
              <Fragment>
                <input
                  type="file"
                  id="imageInput"
                  hidden="hidden"
                  onChange={this.handleImageChange}
                />
                <MyButton
                  tip="Profile photo"
                  onClick={this.handleEditPicture}
                  btnClassName="button"
                >
                  <EditIcon color="primary" />
                </MyButton>
              </Fragment>
            ) : null}
          </div>
          <hr />
          <div className="profile-details">
            <MuiLink
              component={Link}
              to={`/profile/${profileOwner.handle}`}
              color="primary"
              variant="h5"
            >
              @{profileOwner.handle}
            </MuiLink>
            <hr />
            {profileOwner.bio && (
              <Typography variant="body2">{profileOwner.bio}</Typography>
            )}
            <hr />
            {profileOwner.location && (
              <Fragment>
                <LocationOn color="primary" />{" "}
                <span>{profileOwner.location}</span>
                <hr />
              </Fragment>
            )}
            {profileOwner.website && (
              <Fragment>
                <LinkIcon color="primary" />
                <a
                  href={profileOwner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {profileOwner.website}
                </a>
                <hr />
              </Fragment>
            )}
            <CalendarToday color="primary" />{" "}
            <span>
              Joined {dayjs(profileOwner.createdAt).format("MMM YYYY")}
            </span>
          </div>
          {profileOwner.handle === handle ? <EditDetailsButton /> : null}
        </div>
      </Paper>
    );
  }
}

const mapActionsToProps = { uploadImage };

UserProfile.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  profileOwner: PropTypes.object.isRequired,
  handle: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(
  null,
  mapActionsToProps
)(withStyles(styles)(UserProfile));
