// Throttle --> Invokes function call once in a fixed time
export default function throttle(func, wait) {
  let lastTime = 0;
  return function(...args) {
    let now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}
