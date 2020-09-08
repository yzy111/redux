// 增加一个参数 reducer
export default function createStore(reducer, initState) {
  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    // 请按照我的计划修改 state
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }
  // 获取原始数据
  dispatch({ type: Symbol() });
  return {
    subscribe,
    dispatch,
    getState,
  };
}
