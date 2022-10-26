/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum = sum * i;
  }
  console.log(sum, "mee");
  return sum;
}

function stringReverse(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }
  return reversedString;
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {
  let result = "";
  if (!endIdx && !startIdx) {
    return originalString;
  }
  for (let i = startIdx; i <= originalString.length - 1; i++) {
    if (i === endIdx) {
      break;
    }
    result = result + originalString[i];
  }
  return result;
}

function addTheEvens(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}

module.exports = {
  factorial,
  stringReverse,
  slicer,
  addTheEvens,
};
