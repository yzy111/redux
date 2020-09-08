import createStore from "./createStore";
export default function demo1() {
  let initState = {
    counter: {
      count: 0,
    },
    info: {
      name: "",
      description: "",
    },
  };
  let store = createStore(initState);
  // 添加订阅事件
  store.subscribe(() => {
    let state = store.getState();
    console.log(`${state.info.name}：${state.info.description}`);
  });
  store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count);
  });
  // 调用方法改变全局数据
  store.changeState({
    ...store.getState(),
    info: {
      name: "Redux",
      description: "学习redux相关知识",
    },
  });
  store.changeState({
    ...store.getState(),
    counter: {
      count: 1,
    },
  });
}
