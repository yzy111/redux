// import demo1 from "./reduxDemo/demo1";
// import demo2 from "./reduxDemo/demo2";
// import demo3 from "./reduxDemo/demo3";
// import demo4 from "./reduxDemo/demo4";
// import demo5 from "./reduxDemo/demo5";
// import demo6 from "./reduxDemo/demo6";
// import demo7 from "./reduxDemo/demo7";

// console.group("demo1:实现获知数据的改变");
// demo1();
// console.groupEnd();

// console.group("demo2:实现有计划的更改数据");
// demo2();
// console.groupEnd();

// console.group("demo3:合并多个reducer 和 state");
// demo3();
// console.groupEnd();

// console.group("demo4:初步实现中间件");
// demo4();
// console.groupEnd();

// console.group("demo5:实现中间件");
// demo5();
// console.groupEnd();

// console.group("demo6:优化中间件");
// demo6();
// console.groupEnd();

// console.group("demo7:优化Redux");
// demo7();
// console.groupEnd();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initState = {
  count: 0,
  text: "Now is ",
};
const counter = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "DELETE":
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
};
const store = createStore(counter);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
