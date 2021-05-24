import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";

import videosImage from "../images/videosImage.jpg";
import audioImage from "../images/audioImage.png";
import articleImage from "../images/articleImage.png";
import modelsImage from '../images/modelsImage.jpg'

const styles = (theme) => ({
  ...theme.spreadIt,
  card: {
    textAlign: "center",
  },
  media: {
    height: 250,
  },
  actions: {
    justifyContent: "center",
  },
});

class learning extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Typography variant="h3">Learning</Typography>
        <Grid container spacing={5}>
            <Grid item sm={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={videosImage}
                  title="Videos Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Videos
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Medical information presented in the form of a videos
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                  <Button
                    size="large"
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/learning/videos"
                  >
                    {" "}
                    Watch{" "}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={audioImage}
                  title="Audios Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Audios
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Medical information presented in the form of a podcasts
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                  <Button
                    size="large"
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/learning/audios"
                  >
                    {" "}
                    Listen{" "}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={articleImage}
                  title="Articles Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Articles
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Medical information presented in the form of a articles
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                  <Button
                    size="large"
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/learning/articles"
                  >
                    {" "}
                    Read{" "}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={modelsImage}
                  title="Models Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Models
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Medical 3D models uploaded by other users
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                  <Button
                    size="large"
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/learning/models"
                  >
                    {" "}
                    Explore{" "}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
        </Grid>
      </Fragment>
    );
  }
}

learning.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(learning);
