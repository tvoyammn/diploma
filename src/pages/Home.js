import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import logo from "../images/logo.png";
import content from "../images/content.png";

const styles = {
  welcome: {
    margin: "50px auto 10px auto",
  },
  logo: {
    margin: "20px auto 20px auto",
    width: "100%",
    heigth: "100%",
  },
  content: {
    width: "100%",
    heigth: "1000%",
  },
};

class home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid container>
          <Grid item sm={6}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Grid>
          <Grid item sm={6}>
            <Typography variant="h3" className={classes.welcome}>
              Welcome to the StudMedExpert
            </Typography>
            <Typography variant="h4" className={classes.welcome}>
              Here you can share your medical content to another people, such
              as:
            </Typography>
            <Grid container>
              <Grid item sm={4}>
                <List>
                  <ListItem>
                    <Typography variant="h5">Videos</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h5">Audios</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h5">Articles</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h5">3D Models</Typography>
                  </ListItem>
                </List>
              </Grid>
              <Grid item sm={8}>
                <img src={content} alt="content" className={classes.content}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(home);
