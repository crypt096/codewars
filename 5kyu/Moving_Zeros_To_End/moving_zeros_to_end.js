const moveZeros = arr => [
  ...arr.filter(e => e !== 0),
  ...arr.filter(e => e === 0)
]