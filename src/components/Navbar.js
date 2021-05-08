import React, { Component } from "react";

import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import logo from "../images/logo.png";



export default class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Button color='inherit' component={Link} to="/"> Home </Button>
          <Button color='inherit' component={Link} to="/learning"> Learning </Button>
          <Button color='inherit' component={Link} to="/brain"> Brain </Button>
          <Button color='inherit' component={Link} to="/comparation"> Comparation </Button>
          <Button color='inherit' component={Link} to="/vr"> VR </Button>
          <Button color='inherit' component={Link} to="/test"> TEST </Button>
          <Button color='inherit' component={Link} to="/anatomyatlas"> Anatomy Atlas </Button>
          <Button color='inherit' component={Link} to="/login"> Login </Button>
          <Button color='inherit' component={Link} to="/signup"> Sign Up </Button>
        </Toolbar>
      </AppBar>
    );
  }
}


