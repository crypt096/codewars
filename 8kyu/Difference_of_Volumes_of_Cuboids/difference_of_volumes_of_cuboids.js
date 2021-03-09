function findDifference(a, b) {
  let sumA = 1;
  let sumB = 1;

  for (let i = 0; i < 3; i++) {
    sumA *= a[i];
    sumB *= b[i];
  }

  return sumA > sumB ? sumA - sumB : sumB - sumA
}