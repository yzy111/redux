import counterReducer from "./reduder/counterReducer";
import infoReducer from "./reduder/infoReducer";
import combineReducers from "./reduder/combineReducers";
import createStore from "./createStore";
export default function demo3() {
  const reducer = combineReducers({
    counter: counterReducer,
    info: infoReducer,
  });

  let store = createStore(reducer);
  store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count, state.info.name, state.info.description);
  });

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
