import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { makeServer } from "./server";
import { Provider } from "react-redux";
import { store } from "./frontend/redux-store/store.js";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
