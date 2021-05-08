import { Component } from "react";

import "./App.css";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

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
import signUp from "./pages/signUp";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

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
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signUp} />
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
