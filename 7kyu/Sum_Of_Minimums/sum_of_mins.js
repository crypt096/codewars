function sumOfMinimums(arr) {
  let sum = 0;
  arr.map(arr => {
    sum += Math.min(...arr)
  })
  return sum;
}

console.log(sumOfMinimums([
  [1, 2, 3],
  [5, 6, 7],
  [11, 10, 9]
]))

console.log(sumOfMinimums([
  [221, 112, 311],
  [15, 16, 17],
  [1111, 1010, 9000]
]))