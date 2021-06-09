import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteModel } from "../../redux/actions/modelActions";

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
        left: '93%'
    }
};

class DeleteModel extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteModel = () => {
    this.props.deleteModel(this.props.modelId);
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <MyButton
          tip="Delete model"
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
                    Are you sure you want to delete this model?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.deleteModel} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
      </Fragment>
    );
  }
}

DeleteModel.propTypes = {
  deleteModel: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  modelId: PropTypes.string.isRequired,
};

export default connect(null, { deleteModel })(withStyles(styles)(DeleteModel));
