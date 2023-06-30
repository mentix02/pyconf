import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.tsx";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
