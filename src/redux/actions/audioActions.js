import {
  SET_AUDIOS,
  LOADING_DATA,
  LIKE_AUDIO,
  UNLIKE_AUDIO,
  DELETE_AUDIO,
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  POST_AUDIO,
  SET_AUDIO,
  STOP_LOADING_UI,
  SUBMIT_COMMENT_AUDIO,
} from "../types";
import axios from "axios";

//get all Audios
export const getAudios = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/audios")
    .then((res) => {
      dispatch({
        type: SET_AUDIOS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_AUDIOS,
        payload: [],
      });
    });
};

//get a audio
export const getAudio = (audioId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/audio/${audioId}`)
    .then((res) => {
      dispatch({ type: SET_AUDIO, payload: res.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};

//post a audio
export const postAudio = (newAudio) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/audio", newAudio)
    .then((res) => {
      dispatch({
        type: POST_AUDIO,
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

//like a audio
export const likeAudio = (contentId, contentType) => (dispatch) => {
  axios
    .get(`/${contentType}/${contentId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_AUDIO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//unlike a audio
export const unlikeAudio = (contentId, contentType) => (dispatch) => {
  axios
    .get(`/${contentType}/${contentId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_AUDIO,
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
        type: SUBMIT_COMMENT_AUDIO,
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

export const deleteAudio = (audioId) => (dispatch) => {
  axios
    .delete(`/audio/${audioId}`)
    .then(() => {
      dispatch({ type: DELETE_AUDIO, payload: audioId });
    })
    .catch((err) => console.log(err));
};

export const getUserAudios = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_AUDIOS,
        payload: res.data.audios,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_AUDIOS,
        payload: null,
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};