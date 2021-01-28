//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [3,4,5,2,3]
//alert( arr.reduce((acc,c)=>acc + c,0) )

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = arr.map(num => num**2)
//console.log(newArr)

//Create a function that takes string
//Print the reverse of that string to the console
function unoReverse(str){
  console.log( str.split("").reverse().join("") )
}
//unoReverse("elon")

//Create a function that takes in a string
//Alert if the string is a palindrome or not

let palindromeCheck = str => str === str.split("").reverse().join("")
