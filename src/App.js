import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from './redux/types'
import { logoutUser, getUserData } from './redux/actions/userActions'

import "./App.css";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";

import jwtDecode from "jwt-decode";

import Navbar from "./components/layout/Navbar";
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
import profile from './pages/profile'

const theme = createMuiTheme(themeFile);

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser())
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute
                  exact
                  path="/login"
                  component={login}
                />
                <AuthRoute
                  exact
                  path="/signup"
                  component={signup}
                />
                <Route exact path="/learning" component={learning} />
                <Route exact path="/brain" component={brain} />
                <Route exact path="/comparation" component={comparation} />
                <Route exact path="/vr" component={vr} />
                <Route exact path="/learning/videos" component={videos} />
                <Route exact path="/learning/audios" component={audios} />
                <Route exact path="/learning/articles" component={articles} />
                <Route exact path="/test" component={test} />
                <Route exact path="/anatomyatlas" component={anatomyAtlas} />
                <Route exact path="/profile/:handle" component={profile} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
