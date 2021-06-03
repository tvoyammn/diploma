import React, { useState, Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getArticles } from "../redux/actions/articleActions";

import Grid from "@material-ui/core/Grid";

//import VideosList from "../components/video/VideosList";
import Article from "../components/article/Article";
//import VideoSkeleton from '../util/VideoSkeleton'

class articles extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    const { articles, loading } = this.props.articleData;
    let recentArticlesMarkup = !loading ? (
      articles.map((article) => <Article key={article.articleId} article={article} />)
    ) : (
      <p>Loading...</p>//<VideoSkeleton />
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={4} xs={12}>
          <p>Filter...</p>
        </Grid>
        <Grid item sm={8} xs={12}>
          {recentArticlesMarkup}
        </Grid>
      </Grid>
    );
  }
}

articles.propTypes = {
  getArticles: PropTypes.func.isRequired,
  articleData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  articleData: state.articleData,
});

export default connect(mapStateToProps, { getArticles })(articles);