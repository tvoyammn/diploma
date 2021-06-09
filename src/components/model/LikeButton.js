import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { likeModel, unlikeModel } from "../../redux/actions/modelActions";

import { Link } from "react-router-dom";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import MyButton from "../../util/MyButton";
import { propTypes } from "react-bootstrap/esm/Image";

export class LikeButton extends Component {
  likedModel = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find((like) => like.contentId === this.props.contentId)
    )
      return true;
    else return false;
  };

  likeModel = () => {
    this.props.likeModel(this.props.contentId, this.props.contentType);
  };

  unlikeModel = () => {
    this.props.unlikeModel(this.props.contentId, this.props.contentType);
  };

  render() {
    const { authenticated } = this.props.user;
    const likeButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Like">
          <FavoriteBorder color="primary" />
        </MyButton>
      </Link>
    ) : this.likedModel() ? (
      <MyButton tip="Undo like" onClick={this.unlikeModel}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeModel}>
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
  likeModel: PropTypes.func.isRequired,
  unlikeModel: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeModel,
  unlikeModel,
};

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);
