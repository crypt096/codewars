function index(array, n) {
  if (n > array.length - 1) {
    return -1;
  }
  return array[n] ** n;
}

console.log(index([1, 2, 3], 3));
console.log(index([1, 2, 3, 4, 5, 6, 7], 2));
console.log(index([1, 2, 3], 11));
