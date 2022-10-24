/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  if (str.includes(letter)) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome(str) {
  let isPlaindrome = str.split("").reverse().join("") === str;
  return isPlaindrome;
}

function cap(str, letter) {
  if (str.indexOf(letter) !== -1) {
    let char = str.indexOf(letter);
    return str[char + 1].toUpperCase();
  } else {
    return "sorry not found";
  }
}

function firstCharacter(str1, str2) {
  const isFirstCharachter = str1[0].toLowerCase() === str2[0].toLowerCase();
  return isFirstCharachter;
}

module.exports = {
  cap,
  firstCharacter,
  doesInclude,
  isPalindrome,
};

