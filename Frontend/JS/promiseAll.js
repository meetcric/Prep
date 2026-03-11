// Implement Promise.all()
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    let n = iterable.length;
    if (n == 0) {
      resolve([]);
      return;
    }

    let result = [];
    let completed = 0;

    iterable.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          result[index] = res;
          completed++;

          if (completed === n) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
