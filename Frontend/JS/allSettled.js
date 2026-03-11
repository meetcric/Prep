// Implement AllSettled
export default function allSettled(promises) {
  return new Promise((resolve) => {
    let n = promises.length;
    if (n === 0) return resolve([]);

    let arr = [];
    let completed = 0;

    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => {
          arr[idx] = { status: 'fulfilled', value: res };
        })
        .catch((err) => {
          arr[idx] = { status: 'rejected', reason: err };
        })
        .finally(() => {
          completed++;
          if (completed === n) {
            resolve(arr);
          }
        });
    });
  });
}
