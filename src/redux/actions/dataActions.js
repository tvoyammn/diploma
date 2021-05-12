import {
  SET_VIDEOS,
  LOADING_DATA,
  LIKE_VIDEO,
  UNLIKE_VIDEO,
  DELETE_VIDEO,
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  POST_VIDEO,
  SET_VIDEO,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,
} from "../types";
import axios from "axios";

//get all videos
export const getVideos = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/videos")
    .then((res) => {
      dispatch({
        type: SET_VIDEOS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_VIDEOS,
        payload: [],
      });
    });
};

//get a video
export const getVideo = (videoId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/video/${videoId}`)
    .then((res) => {
      dispatch({ type: SET_VIDEO, payload: res.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};

//post a video
export const postVideo = (newVideo) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/video", newVideo)
    .then((res) => {
      dispatch({
        type: POST_VIDEO,
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

//like a video
export const likeVideo = (videoId) => (dispatch) => {
  axios
    .get(`/video/${videoId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_VIDEO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//unlike a video
export const unlikeVideo = (videoId) => (dispatch) => {
  axios
    .get(`/video/${videoId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_VIDEO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
//Submit a comment
export const submitComment = (videoId, commentData) => (dispatch) => {
  axios
    .post(`/video/${videoId}/comment`, commentData)
    .then((res) => {
      dispatch({
        type: SUBMIT_COMMENT,
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

export const deleteVideo = (videoId) => (dispatch) => {
  axios
    .delete(`/video/${videoId}`)
    .then(() => {
      dispatch({ type: DELETE_VIDEO, payload: videoId });
    })
    .catch((err) => console.log(err));
};

export const getUserData = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_VIDEOS,
        payload: res.data.videos,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_VIDEOS,
        payload: null,
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
