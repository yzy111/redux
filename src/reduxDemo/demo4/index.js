import counterReducer from "../demo3/reduder/counterReducer";
import infoReducer from "../demo3/reduder/infoReducer";
import combineReducers from "../demo3/reduder/combineReducers";
import createStore from "../demo3/createStore";
export default function demo4() {
  const reducer = combineReducers({
    counter: counterReducer,
    info: infoReducer,
  });

  let store = createStore(reducer);
  store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count, state.info.name, state.info.description);
  });
  const next = store.dispatch;
  // // 对dispatch 进行重写————记录日志
  // store.dispatch = (action) => {
  //   console.log("this state", store.getState());
  //   console.log("action", action);
  //   next(action);
  //   console.log("next state", store.getState());
  // };

  // // 对dispatch 进行重写————捕获异常
  // store.dispatch = (action) => {
  //   try {
  //     next(action);
  //   } catch (err) {
  //     console.error("错误报告: ", err);
  //   }
  // };
  /////////////////////////////
  // // 整合上面两个需求——但是调用的方法比比较固定
  // //  提取了日志功能
  // const loggerMiddleware = (action) => {
  //   console.log("this state", store.getState());
  //   console.log("action", action);
  //   next(action);
  //   console.log("next state", store.getState());
  // };
  // store.dispatch = (action) => {
  //   try {
  //     loggerMiddleware(action);
  //   } catch (err) {
  //     console.error("错误报告: ", err);
  //   }
  // };

  // 怎样动态组合两个或者多个中间件
  const loggerMiddleware = (next) => (action) => {
    console.log("this state", store.getState());
    console.log("action", action);
    next(action);
    console.log("next state", store.getState());
  };
  const exceptionMiddleware = (next) => (action) => {
    try {
      // loggerMiddleware(action);
      next(action);
    } catch (err) {
      console.error("错误报告: ", err);
    }
  };
  store.dispatch = exceptionMiddleware(loggerMiddleware(next));

  // 自增
  store.dispatch({
    type: "INCREMENT",
  });
  // 改变info名称
  store.dispatch({
    type: "SET_NAME",
    name: "展示",
  });
  //  自减
  store.dispatch({
    type: "DECREMENT",
  });
}
