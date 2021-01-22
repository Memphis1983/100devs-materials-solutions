
// Please create a function that takes in two numbers. Print to the console the division of the these two numbers rounded down.

function twoDivideRoundDown(num1,num2){
  console.log( Math.floor(num1/num2) )
}

// @everyone  Today's Challenge
//
// Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!

function multiWordLength(num,word){
  if( word.length * num > 100 ){
    alert('Winner!')
  }
}
multiWordLength(50,"hello")

// @everyone  Today's Challenge
//
// Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

function addFirstAndLastValArray(arr){
  console.log( arr[0] + arr[arr.length-1] )
}
addFirstAndLastValArray([1,2,3,4,5])

// @everyone  Today's Challenge
//
// Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function.
let namesList = ["Bob","Bobber","Bobberson","Bobbity","Bobson"]

function addNameToList(nameForList){
  namesList.push(nameForList)
  console.log(`You are ${namesList.length} on the list!`);
}
addNameToList("Bobby")


// Also, these should start going out at 12:01am EST tomorrow!
//
//
// @everyone   Today's Challenge
//
// Please create a function that takes in an array of numbers and returns a new array that only contains odd numbers.
//
// Review our last practice problem from last class if you need some ideas.

function newArrOnlyOdd(arr){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      newArr.push(arr[i])
    }
  }
  return newArr
}
newArrOnlyOdd([1,2,3,4,5])

// @everyone   Today's Challenge
//
// Please create a function that takes in a number. Print all the numbers from 1 to that number in the console, but skip any number that when multiplied by three is divisible by 2 evenly.

function numMultiAndDivi(num){
  for(let i = 1; i <= num; i++){
    if( (i * 3) % 2 !== 0 ){
      console.log(i)
    }
  }
}

numMultiAndDivi(100)
