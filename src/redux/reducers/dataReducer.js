import {
  SET_VIDEOS,
  LIKE_VIDEO,
  UNLIKE_VIDEO,
  LOADING_DATA,
  DELETE_VIDEO,
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
    case LIKE_VIDEO:
    case UNLIKE_VIDEO:
      let index = state.videos.findIndex(
        (video) => video.videoId === action.payload.videoId
      );
      state.videos[index] = action.payload;
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
    default:
      return state;
  }
}
