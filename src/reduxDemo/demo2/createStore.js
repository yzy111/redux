// 增加一个参数 reducer，接收修改数据的计划
export default function createStore(reducer, initState) {
  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }
  // 对比上一次的changeState;它只是进行了简单的赋值
  function dispatch(action) {
    // 请按照我的计划修改 state——会把action就是计划名称，以及state原始数据告诉更改数据的方法
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState,
  };
}
