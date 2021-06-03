import {
  SET_ARTICLES,
  LOADING_DATA,
  LIKE_ARTICLE,
  UNLIKE_ARTICLE,
  DELETE_ARTICLE,
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  POST_ARTICLE,
  SET_ARTICLE,
  STOP_LOADING_UI,
  SUBMIT_COMMENT_ARTICLE,
} from "../types";
import axios from "axios";

//get all articles
export const getArticles = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/articles")
    .then((res) => {
      dispatch({
        type: SET_ARTICLES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ARTICLES,
        payload: [],
      });
    });
};

//get a article
export const getArticle = (articleId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/article/${articleId}`)
    .then((res) => {
      dispatch({ type: SET_ARTICLE, payload: res.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};

//post a article
export const postArticle = (newArticle) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/article", newArticle)
    .then((res) => {
      dispatch({
        type: POST_ARTICLE,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

//like a article
export const likeArticle = (contentId, contentType) => (dispatch) => {
  axios
    .get(`/${contentType}/${contentId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_ARTICLE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//unlike a article
export const unlikeArticle = (contentId, contentType) => (dispatch) => {
  axios
    .get(`/${contentType}/${contentId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_ARTICLE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
//Submit a comment
export const submitComment = (contentId, contentType, commentData) => (dispatch) => {
  axios
    .post(`/${contentType}/${contentId}/comment`, commentData)
    .then((res) => {
      dispatch({
        type: SUBMIT_COMMENT_ARTICLE,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const deleteArticle = (articleId) => (dispatch) => {
  axios
    .delete(`/article/${articleId}`)
    .then(() => {
      dispatch({ type: DELETE_ARTICLE, payload: articleId });
    })
    .catch((err) => console.log(err));
};

export const getUserArticles = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_ARTICLES,
        payload: res.data.videos,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_ARTICLES,
        payload: null,
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};