function parse(data) {
  let value = 0;
  let outputArr = [];
  let commandsArr = data.split("");
  for (let counter = 0; counter < commandsArr.length; counter++) {
    if (commandsArr[counter] === 'i') {
      value += 1;
    } else if (commandsArr[counter] === 'd') {
      value -= 1;
    } else if (commandsArr[counter] === 's') {
      value *= value;
    } else if (commandsArr[counter] === 'o') {
      outputArr.push(value);
    }
  }
  return outputArr;
}