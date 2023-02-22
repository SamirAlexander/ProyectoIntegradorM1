import { createStore, applyMiddleware, compose } from "redux";
import characterReducer from "../Redux/reducer/characterReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  characterReducer,
  composeEnhancers(applyMiddleware())
);

export default store;
