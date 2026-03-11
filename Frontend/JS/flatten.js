// Flatten an array recursively
export default function flatten(arr) {
  let result = arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc.push(...flatten(curr));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
  return result;
}
