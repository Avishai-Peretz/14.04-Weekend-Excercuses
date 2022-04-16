const arr = [10, 19, 5, 6, 7, 8]
const twolowerSum = (arr) => {
  let min1 = arr[0];
  let min2 = arr[1]

  if (min1 > min2) {
    const num = min1;
    min1 = min2;
    min2 = num;
  }
  for (let num of arr) {
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }
  return min1 + min2;
};

console.log(twolowerSum(arr));
