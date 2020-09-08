export default function compose(...funcs) {
  // 如果没有传入的参数，内部实现一个函数返回
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  // 如果传入的参数只有一个函数，直接返回该函数
  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));

  // return funcs.reduce(function (a, b) {
  //   return function (...args) {
  //     return a(b(...args));
  //   };
  // });

  // 第一次迭代
  // 参数：add1，add2
  // 返回function fn1(...args1){return add1(add2(...args1))}

  // 第二次迭代
  // 参数：function fn1(...args1){return add1(add2(...args1))}，add3
  // 返回：function fn2(...args2){
  //   return (function fn1(...args1){return add1(add2(...args1))})(add3(...args2))
  // }
  // 需要注意：函数中的args1就是add3(...args2);

  //// 第三次迭代
  // 参数：function fn2(...args2){
  //   return (function fn1(...args1){return add1(add2(...args1))})(add3(...args2))
  // }，add4
  // 返回：function fn3(...args3)
  // {return (function fn2(...args2)
  //      {return (function fn1(...args1)
  //          {return add1(add2(...args1))}
  //       )(add3(...args2))}
  // )(add4(...args3))}
  // 此时函数中的args2就是add4(...args3)
}
