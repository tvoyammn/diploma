import React, { useState, Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getAudios } from "../redux/actions/audioActions";

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//import VideosList from "../components/video/VideosList";
import Audio from "../components/audio/Audio";
//import VideoSkeleton from '../util/VideoSkeleton'

const styles = {
  sort: {
    textTransform: "none",
  },
};

class audios extends Component {
  componentDidMount() {
    this.props.getAudios();
  }

  render() {
    const { classes } = this.props;
    const { audios, loading } = this.props.audioData;
    let recentAudiosMarkup = !loading ? (
      audios.map((audio) => <Audio key={audio.audioId} audio={audio} />)
    ) : (
      <p>Loading...</p> //<VideoSkeleton />
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={3} xs={12}>
          <Grid container>
            <Grid item sm={5}>
              <Typography variant="subtitle1">Sort by</Typography>
            </Grid>
            <Grid item sm={7}>
              <Button size="small" variant="outlined" className={classes.sort}>
                <Typography variant="body2">most recent</Typography>
                <ArrowDropDownIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={9} xs={12}>
          {recentAudiosMarkup}
        </Grid>
      </Grid>
    );
  }
}

audios.propTypes = {
  classes: PropTypes.object.isRequired,
  getAudios: PropTypes.func.isRequired,
  audioData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  audioData: state.audioData,
});

export default connect(mapStateToProps, { getAudios })(
  withStyles(styles)(audios)
);
