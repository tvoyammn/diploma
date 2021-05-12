import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { likeVideo, unlikeVideo } from "../../redux/actions/dataActions";

import { Link } from "react-router-dom";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import MyButton from "../../util/MyButton";
import { propTypes } from "react-bootstrap/esm/Image";

export class LikeButton extends Component {
  likedVideo = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find((like) => like.videoId === this.props.videoId)
    )
      return true;
    else return false;
  };

  likeVideo = () => {
    this.props.likeVideo(this.props.videoId);
  };

  unlikeVideo = () => {
    this.props.unlikeVideo(this.props.videoId);
  };

  render() {
    const { authenticated } = this.props.user;
    const likeButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Like">
          <FavoriteBorder color="primary" />
        </MyButton>
      </Link>
    ) : this.likedVideo() ? (
      <MyButton tip="Undo like" onClick={this.unlikeVideo}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeVideo}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );
    return likeButton;
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  videoId: PropTypes.string.isRequired,
  likeVideo: PropTypes.func.isRequired,
  unlikeVideo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeVideo,
  unlikeVideo,
};

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);
