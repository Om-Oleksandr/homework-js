let firstRandomNumber = -6;
let secondRandomNumber = -6;
let thirdRandomNumber = 12;
let result;
if (firstRandomNumber > 0 && secondRandomNumber > 0) {
  result = firstRandomNumber * secondRandomNumber;
} else if (
  (firstRandomNumber > 0 && secondRandomNumber < 0) ||
  (firstRandomNumber < 0 && secondRandomNumber > 0)
) {
  if (firstRandomNumber > secondRandomNumber) {
    result = firstRandomNumber / secondRandomNumber;
  } else {
    result = secondRandomNumber / firstRandomNumber;
  }
} else if (firstRandomNumber === 0 && secondRandomNumber === 0) {
  result = NaN;
} else if (firstRandomNumber === 0 || secondRandomNumber === 0) {
  if (firstRandomNumber === 0) {
    result = secondRandomNumber;
  } else {
    result = firstRandomNumber;
  }
}

if (
  thirdRandomNumber < 0 ||
  thirdRandomNumber % 2 ||
  thirdRandomNumber % 3 ||
  thirdRandomNumber % 6
) {
  console.log("lose");
} else {
  console.log("win");
}

console.log(result);

