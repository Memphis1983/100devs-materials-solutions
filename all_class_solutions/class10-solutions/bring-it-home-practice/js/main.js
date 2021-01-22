// *Variables*
// Create a variable and console log the value
let animal = 'zebra'
console.log(animal);
// Create a variable, add 10 to it, and alert the value
let total = 0
total = total + 10
alert(total)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNum(num1,num2,num3,num4){
  alert(num1-num2-num3-num4)
}
subFourNum(4738,18,347,28)
// Create a function that divides one number by another and returns the remainder
function divideNum(num1,num2){
  return num1%num2
}
divideNum(10,7)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoAndCheck(num1,num2){
  if(num1+num2 > 50){
    alert("Jumanji")
  }
}
addTwoAndCheck(50,1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiThreeCheck(num1,num2,num3){
  let prod = num1*num2*num3
  if(prod % 3 === 0){
    alert('zebra')
  }
}
multiThreeCheck(3,6,9)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function repeatWord(word,num){
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
repeatWord("Dominos", 21)
