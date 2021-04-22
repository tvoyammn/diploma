import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./images/logo.png";

import Home from '../pages/Home';
import Learning from '../pages/Learning';
import Brain from '../pages/Brain';
import Comparation from '../pages/Comparation';
import VR from '../pages/VR';
import Videos from '../pages/Videos';
import Audios from '../pages/Audios';
import Articles from '../pages/Articles';
import Test from '../pages/Test';
import AnatomyAtlas from '../pages/AnatomyAtlas';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="primary" variant="light">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="display-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/learning"> Learning </Nav.Link>
                <Nav.Link href="/brain"> Brain </Nav.Link>
                <Nav.Link href="/comparation"> Comparation </Nav.Link>
                <Nav.Link href="/vr"> VR </Nav.Link>
                <Nav.Link href="/test"> TEST </Nav.Link>
                <Nav.Link href="/anatomyatlas"> Anatomy Atlas </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/learning" component={Learning} />
                <Route exact path="/brain" component={Brain} />
                <Route exact path="/comparation" component={Comparation} />
                <Route exact path="/vr" component={VR} />
                <Route exact path="/learning/videos" component={Videos} />
                <Route exact path="/learning/audios" component={Audios} />
                <Route exact path="/learning/articles" component={Articles} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/anatomyatlas" component={AnatomyAtlas} />
            </Switch>
        </Router>
      </>
    );
  }
}
