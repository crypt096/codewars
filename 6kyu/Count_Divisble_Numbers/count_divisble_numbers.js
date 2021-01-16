/*
  NOTE: This kata must be done within O(log n) or better to pass. Constant time solution is possible ( my solution ) 
*/
function divisibleCount(x, y, k) {
  return Math.floor(y / k) - Math.floor((x - 1) / k)
}

console.log(divisibleCount(6, 11, 2)) // should return 3