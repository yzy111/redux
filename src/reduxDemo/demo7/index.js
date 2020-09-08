import { createStore, combineReducers, applyMiddleware } from "./redux";
import counterReducer from "./reducers/counter";
import loggerMiddleware from "./middlewares/loggerMiddleware";
import exceptionMiddleware from "./middlewares/exceptionMiddleware";
import timeMiddleware from "./middlewares/timeMiddleware";
export default function demo7() {
  const reducer = combineReducers({
    counter: counterReducer,
  });

  // 接收旧的 createStore，返回新的 createStore
  const rewriteCreateStoreFunc = applyMiddleware(
    exceptionMiddleware,
    timeMiddleware,
    loggerMiddleware
  );

  // 返回了一个 dispatch 被重写过的 store
  const store = createStore(reducer, {}, rewriteCreateStoreFunc);
  // const store = createStore(reducer, rewriteCreateStoreFunc);

  const nolistener = store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count);
  });

  // 自增
  store.dispatch({
    type: "INCREMENT",
  });
  store.dispatch({
    type: "DECREMENT",
  });

  nolistener();
  console.log("取消订阅");
  // 自增
  store.dispatch({
    type: "INCREMENT",
  });
  store.dispatch({
    type: "DECREMENT",
  });
}

// 还需完善的问题
// 订阅之后不能退订
// 中间件拿到完整的store，这样在在中间件中就可以修改subscribe等方法
// 创建store 的时候不传initState,怎样处理
// 怎样实现reducer 的按需加载
