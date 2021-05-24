/* eslint-disable import/no-anonymous-default-export */
import {
    SET_MODELS,
    LIKE_MODEL,
    UNLIKE_MODEL,
    LOADING_DATA,
    DELETE_MODEL,
    POST_MODEL,
    SET_MODEL,
    SUBMIT_COMMENT_MODEL,
  } from "../types";
  
  const initialState = {
    models: [],
    model: {},
    loading: false,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOADING_DATA:
        return {
          ...state,
          loading: true,
        };
      case SET_MODELS:
        return {
          ...state,
          models: action.payload,
          loading: false,
        };
      case SET_MODEL:
        return {
          ...state,
          model: action.payload
        }
      case LIKE_MODEL:
      case UNLIKE_MODEL:
        let index = state.models.findIndex(
          (model) => model.modelId === action.payload.modelId
        );
        state.models[index] = action.payload;
        if(state.model.modelId === action.payload.modelId) {
          state.model = { ...state.model, ...action.payload };
        }
        return {
          ...state,
        };
      case DELETE_MODEL:
        index = state.models.findIndex(
          (model) => model.modelId === action.payload
        );
        state.models.splice(index, 1);
        return {
          ...state,
        };
      case POST_MODEL:
        return {
          ...state,
          models: [
            action.payload,
            ...state.models
          ]
        }
      case SUBMIT_COMMENT_MODEL:
        return {
          ...state,
          model: {
            ...state.model,
            comments: [action.payload, ...state.model.comments]
          }
        }
      default:
        return state;
    }
  }