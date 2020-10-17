import React from "react";
import ReactDOM from "react-dom";
import { createStore} from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
// import * as actions from "./actions";
import App from "./components/app";
const store = createStore(reducer);
// const { dispatch } = store;
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// document.getElementById("inc").addEventListener("click", inc);
// document.getElementById("dec").addEventListener("click", dec);
// document.getElementById("rnd").addEventListener("click", () => {
//   const value = Math.floor(Math.random() * 10);

//   rnd(value);
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// update();
// store.subscribe(update);
