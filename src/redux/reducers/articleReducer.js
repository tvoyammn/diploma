/* eslint-disable import/no-anonymous-default-export */
import {
  SET_ARTICLES,
  LIKE_ARTICLE,
  UNLIKE_ARTICLE,
  LOADING_DATA,
  DELETE_ARTICLE,
  POST_ARTICLE,
  SET_ARTICLE,
  SUBMIT_COMMENT_ARTICLE,
} from "../types";

const initialState = {
  articles: [],
  article: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case SET_ARTICLE:
      return {
        ...state,
        article: action.payload
      }
    case LIKE_ARTICLE:
    case UNLIKE_ARTICLE:
      let index = state.articles.findIndex(
        (article) => article.articleId === action.payload.articleId
      );
      state.articles[index] = action.payload;
      if(state.article.articleId === action.payload.articleId) {
        state.article = { ...state.article, ...action.payload };
      }
      return {
        ...state,
      };
    case DELETE_ARTICLE:
      index = state.articles.findIndex(
        (article) => article.articleId === action.payload
      );
      state.articles.splice(index, 1);
      return {
        ...state,
      };
    case POST_ARTICLE:
      return {
        ...state,
        articles: [
          action.payload,
          ...state.articles
        ]
      }
    case SUBMIT_COMMENT_ARTICLE:
      return {
        ...state,
        article: {
          ...state.article,
          comments: [action.payload, ...state.article.comments]
        }
      }
    default:
      return state;
  }
}