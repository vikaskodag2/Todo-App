import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./containers/app";
import rootReducer from "./reducers";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

const store = createStore(rootReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
