import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";

import withStyles from "@material-ui/core/styles/withStyles";

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import UploadContent from './UploadContent'
import Notifications from './Notifications'

import MyButton from '../../util/MyButton'

const styles = theme => ({
  ...theme.spreadIt,
    rigthContent: {
      position: 'absolute',
        display: 'flex'
    },
    grow: {
      flexGrow: 1,
    },
})



class Navbar extends Component {

  handleLogout = () => {
    this.props.logoutUser();
  }

  render() {
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated
      },
    } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <Button color='inherit' component={Link} to="/"> Home </Button>
              <Button color='inherit' component={Link} to="/learning"> Learning </Button>
                {/* <Button color='inherit' component={Link} to="/comparation"> Comparation </Button> */}
                <Button color='inherit' component={Link} to="/anatomyatlas"> Anatomy Atlas </Button>
                <Button color='inherit' component={Link} to="/vr"> VR </Button>
                {/* <Button color='inherit' component={Link} to="/test"> TEST </Button> */}
                <Typography variant="h6" className={classes.grow} />
              <Notifications />
              <UploadContent />
                <Button color='inherit' component={Link} to={`/profile/${handle}`}> Profile </Button>
                <Button color='inherit' component={Link} to='/' onClick={this.handleLogout}>Log out</Button>
            </Fragment>
          ): (
            <Fragment>
                <Button color='inherit' component={Link} to="/"> Home </Button>
                <Button color='inherit' component={Link} to="/learning"> Learning </Button>
                {/* <Button color='inherit' component={Link} to="/brain"> Brain </Button>
                <Button color='inherit' component={Link} to="/comparation"> Comparation </Button> */}
                <Button color='inherit' component={Link} to="/anatomyatlas"> Anatomy Atlas </Button>
                <Button color='inherit' component={Link} to="/vr"> VR </Button>
                <Typography variant="h6" className={classes.grow} />
                {/* <Button color='inherit' component={Link} to="/test"> TEST </Button> */}
                <Button color='inherit' component={Link} to="/login"> Login </Button>
                <Button color='inherit' component={Link} to="/signup"> Sign Up </Button>
              </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapActionsToProps = { logoutUser };

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Navbar));