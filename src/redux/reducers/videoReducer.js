/* eslint-disable import/no-anonymous-default-export */
import {
  SET_VIDEOS,
  LIKE_VIDEO,
  UNLIKE_VIDEO,
  LOADING_DATA,
  DELETE_VIDEO,
  POST_VIDEO,
  SET_VIDEO,
  SUBMIT_COMMENT_VIDEO,
} from "../types";

const initialState = {
  videos: [],
  video: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false,
      };
    case SET_VIDEO:
      return {
        ...state,
        video: action.payload
      }
    case LIKE_VIDEO:
    case UNLIKE_VIDEO:
      let index = state.videos.findIndex(
        (video) => video.videoId === action.payload.videoId
      );
      state.videos[index] = action.payload;
      if(state.video.videoId === action.payload.videoId) {
        state.video = { ...state.video, ...action.payload };
      }
      return {
        ...state,
      };
    case DELETE_VIDEO:
      index = state.videos.findIndex(
        (video) => video.videoId === action.payload
      );
      state.videos.splice(index, 1);
      return {
        ...state,
      };
    case POST_VIDEO:
      return {
        ...state,
        videos: [
          action.payload,
          ...state.videos
        ]
      }
    case SUBMIT_COMMENT_VIDEO:
      return {
        ...state,
        video: {
          ...state.video,
          comments: [action.payload, ...state.video.comments]
        }
      }
    default:
      return state;
  }
}
