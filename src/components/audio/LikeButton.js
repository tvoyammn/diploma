import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { likeAudio, unlikeAudio } from "../../redux/actions/audioActions";

import { Link } from "react-router-dom";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import MyButton from "../../util/MyButton";

export class LikeButton extends Component {
  likedAudio = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find((like) => like.contentId === this.props.contentId)
    )
      return true;
    else return false;
  };

  likeAudio = () => {
    this.props.likeAudio(this.props.contentId, this.props.contentType);
  };

  unlikeAudio = () => {
    this.props.unlikeAudio(this.props.contentId, this.props.contentType);
  };

  render() {
    const { authenticated } = this.props.user;
    const likeButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Like">
          <FavoriteBorder color="primary" />
        </MyButton>
      </Link>
    ) : this.likedAudio() ? (
      <MyButton tip="Undo like" onClick={this.unlikeAudio}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeAudio}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );
    return likeButton;
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  contentId: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  likeAudio: PropTypes.func.isRequired,
  unlikeAudio: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeAudio,
  unlikeAudio,
};

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);
