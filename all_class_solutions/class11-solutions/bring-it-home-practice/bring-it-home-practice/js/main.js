// *Variables*
// Create a variable and console log the value
const bestMate = "Bob"
console.log(bestMate)

// Create a variable, add 10 to it, and alert the value
let count = 0
count = count + 10
alert(count)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFourAndAlert(n1,n2,n3,n4){
  alert(n1-n2-n3-n4)
}
subFourAndAlert(229,19,8,100)

// Create a function that divides one number by another and returns the remainder
function divideAndReturnRemainder(bulbasaur,pikachu){
  return bulbasaur % pikachu
}
console.log( divideAndReturnRemainder(10,6) )

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoAlertJumanjiOver50(num1,num2){
  let sum = num1 + num2
  if(sum > 50){
    alert("JUMANJI")
  }
}
addTwoAlertJumanjiOver50(50,1)


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeNumCheckDivsByThreeAlertZebra(n1,n2,n3){
  let product = n1*n2*n3
  if(product % 3 === 0){
    alert("ZEBRA")
  }else{
    alert("Try Again")
  }
}

multiplyThreeNumCheckDivsByThreeAlertZebra(2,4,2)
