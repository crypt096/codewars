function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  }
  return false;
}

console.log(isDivideBy(-12, 2, -6));
console.log(isDivideBy(-12, 2, -5));
console.log(isDivideBy(45, 1, 6));
