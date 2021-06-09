import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteArticle } from "../../redux/actions/articleActions";

import withStyles from "@material-ui/core/styles/withStyles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

import DeleteOutline from "@material-ui/icons/DeleteOutline";

import MyButton from "../../util/MyButton";

const styles = {
    deleteButton: {
        position: 'absolute',
        top: '2%',
        left: '85%'
    }
};

class DeleteArticle extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteArticle = () => {
    this.props.deleteArticle(this.props.articleId);
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <MyButton
          tip="Delete article"
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteOutline color="secondary" />
        </MyButton>
        <Dialog 
            open={this.state.open}
            onClose={this.handleClose}
            fullWidth
            maxWidth="sm"
            >
                <DialogTitle>
                    Are you sure you want to delete this article?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.deleteArticle} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
      </Fragment>
    );
  }
}

DeleteArticle.propTypes = {
  deleteArticle: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  articleId: PropTypes.string.isRequired,
};

export default connect(null, { deleteArticle })(withStyles(styles)(DeleteArticle));
