import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//import store from "./Redux/store.js";
import { createStore } from "redux";
import rootReducer from "./Redux/reducer/characterReducer";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
