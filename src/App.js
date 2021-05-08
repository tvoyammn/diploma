import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from './util/theme'

import jwtDecode from 'jwt-decode'

import Navbar from "./components/Navbar";
import AuthRoute from "./util/AuthRoute";

import home from "./pages/home";
import learning from "./pages/learning";
import brain from "./pages/brain";
import comparation from "./pages/comparation";
import vr from "./pages/vr";
import videos from "./pages/videos";
import audios from "./pages/audios";
import articles from "./pages/articles";
import test from "./pages/test";
import anatomyAtlas from "./pages/anatomyAtlas";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme(themeFile);

let authenticated;
const token = localStorage.FBIdToken;
if(token) {
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login'
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute exact path="/login" component={login} authenticated={authenticated}/>
                <AuthRoute exact path="/signup" component={signup} authenticated={authenticated}/>
                <Route exact path="/learning" component={learning} />
                <Route exact path="/brain" component={brain} />
                <Route exact path="/comparation" component={comparation} />
                <Route exact path="/vr" component={vr} />
                <Route exact path="/learning/videos" component={videos} />
                <Route exact path="/learning/audios" component={audios} />
                <Route exact path="/learning/articles" component={articles} />
                <Route exact path="/test" component={test} />
                <Route exact path="/anatomyatlas" component={anatomyAtlas} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
