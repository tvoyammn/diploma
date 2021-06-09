import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { likeArticle, unlikeArticle } from "../../redux/actions/articleActions";

import { Link } from "react-router-dom";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import MyButton from "../../util/MyButton";

export class LikeButton extends Component {
  likedArticle = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find((like) => like.contentId === this.props.contentId)
    )
      return true;
    else return false;
  };

  likeArticle = () => {
    this.props.likeArticle(this.props.contentId, this.props.contentType);
  };

  unlikeArticle = () => {
    this.props.unlikeArticle(this.props.contentId, this.props.contentType);
  };

  render() {
    const { authenticated } = this.props.user;
    const likeButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Like">
          <FavoriteBorder color="primary" />
        </MyButton>
      </Link>
    ) : this.likedArticle() ? (
      <MyButton tip="Undo like" onClick={this.unlikeArticle}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeArticle}>
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
  likeArticle: PropTypes.func.isRequired,
  unlikeArticle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeArticle,
  unlikeArticle,
};

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);
