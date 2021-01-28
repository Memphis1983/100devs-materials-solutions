//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, c) => acc + c, 0);
alert(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let newArr = arr.map((num) => num ** 2);
console.log(newArr);

//Create a function that takes string
//Print the reverse of that string to the console

function unoReverse(str) {
  return str.split("").reverse().join("");
}
reverseString("Dingo Dongo");

//Create a function that takes in a string
//Alert if the string is a palindrome or not
let palindromeCheck = (str) => str === str.split("").reverse().join("");

// or
function palindromeCheck(str) {
  str.split("").reverse().join("");
}
