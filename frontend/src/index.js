import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
// import { hydrate, render } from "react-dom";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     rootElement
//   );
// } else {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     rootElement
//   );
// }
