import createStore from "./createStore";
import reducer from "./reducer";
export default function demo2() {
  let initState = {
    count: 0,
  };
  // 创建一个全局 store
  let store = createStore(reducer, initState);

  store.subscribe(() => {
    let state = store.getState();
    console.log(state.count);
  });
  // action 是一个对象，其中的type属性是必须的，用于描述更改的计划是什么
  // 自增
  store.dispatch({
    type: "INCREMENT",
  });
  // 自减
  store.dispatch({
    type: "DECREMENT",
  });
  // 我想随便改 计划外的修改是无效的！
  store.dispatch({
    count: "abc",
  });
}
