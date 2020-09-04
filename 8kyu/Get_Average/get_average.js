function getAverage(marks){
  let sum = 0;
  marks.forEach(el => {
    sum+=el;
  })
  return Math.floor(sum / marks.length);
}

console.log(getAverage([1,2,3,4,5]));
console.log(getAverage([23,46,98,32,74]));
console.log(getAverage([11,11,11,11,11]));