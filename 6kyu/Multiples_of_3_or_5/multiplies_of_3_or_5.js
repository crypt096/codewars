const solution = number => {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (number < 0) return 0;
    if (i % 3 === 0 && i % 5 === 0) {
      sum += i;
    } else if (i % 3 === 0) {
      sum += i;
    } else if (i & 5 === 0) {
      sum += i;
    } else if (i < 0) {
      sum += 0;
    }
  }
  return sum;
}