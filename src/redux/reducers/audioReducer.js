/* eslint-disable import/no-anonymous-default-export */
import {
  SET_AUDIOS,
  LIKE_AUDIO,
  UNLIKE_AUDIO,
  LOADING_DATA,
  DELETE_AUDIO,
  POST_AUDIO,
  SET_AUDIO,
  SUBMIT_COMMENT_AUDIO,
} from "../types";

const initialState = {
  audios: [],
  audio: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_AUDIOS:
      return {
        ...state,
        audios: action.payload,
        loading: false,
      };
    case SET_AUDIO:
      return {
        ...state,
        audio: action.payload
      }
    case LIKE_AUDIO:
    case UNLIKE_AUDIO:
      let index = state.audios.findIndex(
        (audio) => audio.audioId === action.payload.audioId
      );
      state.audios[index] = action.payload;
      if(state.audio.audioId === action.payload.audioId) {
        state.audio = { ...state.audio, ...action.payload };
      }
      return {
        ...state,
      };
    case DELETE_AUDIO:
      index = state.audios.findIndex(
        (audio) => audio.audioId === action.payload
      );
      state.audios.splice(index, 1);
      return {
        ...state,
      };
    case POST_AUDIO:
      return {
        ...state,
        audios: [
          action.payload,
          ...state.audios
        ]
      }
    case SUBMIT_COMMENT_AUDIO:
      return {
        ...state,
        audio: {
          ...state.audio,
          comments: [action.payload, ...state.audio.comments]
        }
      }
    default:
      return state;
  }
}