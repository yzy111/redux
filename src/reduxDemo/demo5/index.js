import createStore from "./createStore";
import counterReducer from "./reduder/counterReducer";
import infoReducer from "./reduder/infoReducer";
import combineReudcers from "./reduder/combineReducers";

import loggerMiddleware from "./middleware/loggerMiddleware";
import exceptionMiddleware from "./middleware/exceptionMiddleware";
import timeMiddleware from "./middleware/timeMiddleware";

export default function demo5() {
  const reducer = combineReudcers({
    counter: counterReducer,
    info: infoReducer,
  });
  const store = createStore(reducer);
  const next = store.dispatch;

  const logger = loggerMiddleware(store);
  const exception = exceptionMiddleware(store);
  const time = timeMiddleware(store);
  store.dispatch = exception(time(logger(next)));
  store.subscribe(() => {
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
}
