import React, { useState, Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getArticles } from "../redux/actions/articleActions";

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//import VideosList from "../components/video/VideosList";
import Article from "../components/article/Article";
//import VideoSkeleton from '../util/VideoSkeleton'

const styles = {
  sort: {
    textTransform: "none",
  },
};

class articles extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    const { classes } = this.props;
    const { articles, loading } = this.props.articleData;
    let recentArticlesMarkup = !loading ? (
      articles.map((article) => <Article key={article.articleId} article={article} />)
    ) : (
      <p>Loading...</p>//<VideoSkeleton />
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
        <Grid item sm={4} xs={12}>
          {recentArticlesMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {recentArticlesMarkup}
        </Grid>
      </Grid>
    );
  }
}

articles.propTypes = {
  classes: PropTypes.object.isRequired,
  getArticles: PropTypes.func.isRequired,
  articleData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  articleData: state.articleData,
});

export default connect(mapStateToProps, { getArticles })(withStyles(styles)(articles));