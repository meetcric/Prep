// Implement Any
export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    let n = iterable.length;
    let errors = [];
    let cnt = 0;

    if (n === 0) {
      return reject(new AggregateError(errors));
    }

    iterable.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          errors[index] = err;
          cnt++;
          if (cnt === n) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
}
