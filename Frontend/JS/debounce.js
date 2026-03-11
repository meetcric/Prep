// Debounce code - Delays the function's call until the event stops firing for a fixed time
export default function debounce(func, wait) {
  let timer = null;

  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
