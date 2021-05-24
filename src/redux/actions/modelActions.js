import {
    SET_MODELS,
    LOADING_DATA,
    LIKE_MODEL,
    UNLIKE_MODEL,
    DELETE_MODEL,
    LOADING_UI,
    SET_ERRORS,
    CLEAR_ERRORS,
    POST_MODEL,
    SET_MODEL,
    STOP_LOADING_UI,
    SUBMIT_COMMENT_MODEL,
  } from "../types";
  import axios from "axios";
  
  //get all models
  export const getModels = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get("/models")
      .then((res) => {
        dispatch({
          type: SET_MODELS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_MODELS,
          payload: [],
        });
      });
  };
  
  //get a model
  export const getModel = (modelId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .get(`/model/${modelId}`)
      .then((res) => {
        dispatch({ type: SET_MODEL, payload: res.data });
        dispatch({ type: STOP_LOADING_UI });
      })
      .catch((err) => console.log(err));
  };
  
  //post a model
  export const postModel = (newModel) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .post("/model", newModel)
      .then((res) => {
        dispatch({
          type: POST_MODEL,
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
  
  //like a model
  export const likeModel = (contentId, contentType) => (dispatch) => {
    axios
      .get(`/${contentType}/${contentId}/like`)
      .then((res) => {
        dispatch({
          type: LIKE_MODEL,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  
  //unlike a model
  export const unlikeModel = (contentId, contentType) => (dispatch) => {
    axios
      .get(`/${contentType}/${contentId}/unlike`)
      .then((res) => {
        dispatch({
          type: UNLIKE_MODEL,
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
          type: SUBMIT_COMMENT_MODEL,
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
  
  export const deleteModel = (modelId) => (dispatch) => {
    axios
      .delete(`/model/${modelId}`)
      .then(() => {
        dispatch({ type: DELETE_MODEL, payload: modelId });
      })
      .catch((err) => console.log(err));
  };
  
  export const getUserModels = (userHandle) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get(`/user/${userHandle}`)
      .then((res) => {
        dispatch({
          type: SET_MODELS,
          payload: res.data.models,
        });
      })
      .catch(() => {
        dispatch({
          type: SET_MODELS,
          payload: null,
        });
      });
  };
  
  export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };