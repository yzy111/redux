export default function createStore(initState) {
  let state = initState;
  // 存放订阅事件
  let listeners = [];
  // 添加订阅事件
  function subscribe(listener) {
    listeners.push(listener);
  }
  // 改变数据
  function changeState(newState) {
    state = newState;
    // 通知所有的订阅者，我的数据发生了改变
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }
  // 获取到全局的数据
  function getState() {
    return state;
  }
  return {
    subscribe,
    changeState,
    getState,
  };
}
