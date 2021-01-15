const flip = (d, a) => {
  let arr = [];
  d === 'L' ?
    arr = a.sort((a, b) => b - a) :
    arr = a.sort((a, b) => a - b)
  return arr
}

console.log(flip('L', [1, 2, 3, 4, 5]))
console.log(flip('R', [1, 2, 3, 4, 5]))