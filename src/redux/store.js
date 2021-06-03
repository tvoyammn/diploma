import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import videoReducer from "./reducers/videoReducer";
import audioReducer from './reducers/audioReducer'
import articleReducer from './reducers/articleReducer'
import modelReducer from './reducers/modelReducer'
import uiReducer from "./reducers/uiReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  videoData: videoReducer,
  audioData: audioReducer,
  articleData: articleReducer,
  modelData: modelReducer,
  UI: uiReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
