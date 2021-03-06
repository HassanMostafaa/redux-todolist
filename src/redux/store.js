import { createStore, applyMiddleware } from "redux";
import rootReducers from "./rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
