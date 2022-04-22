import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import throttle from "lodash/throttle";

import App from "./containers/app";
import rootReducer from "./reducers";
import { loadState, saveState } from "./util/localStorage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState({
      lists: store.getState().lists,
    });
  }, 1000)
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
