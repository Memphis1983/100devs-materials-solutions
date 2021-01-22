document.querySelector('#add').addEventListener('click',add)

function add(){
  let num1 = Number(document.querySelector('#num1').value)
  let num2 = Number(document.querySelector('#num2').value)
  let sum = num1 + num2
  document.querySelector('#result').innerText = sum
  document.querySelector('#num1').value = ""
  document.querySelector('#num2').value = ""

}





// document.querySelector('button').addEventListener('click', getHoroscope)
//
// function getHoroscope(){
//   let month = document.querySelector('#month').value.toLowerCase()
//   let day = Number(document.querySelector('#day').value)
//
//   if((month === "oct" && day >= 23) || (month === "nov" && day <=22)){
//     console.log('Scorpio');
//   }else(){
//
//   }
// }

// *Variables*
// Create a variable and alert log the value
// let word = "Hello"
// alert(word)
// console.log(word)
// // Create a variable, add -15 to it, and print the value to the console
// let num = 100
// num = num + -15
// console.log(num)

// *Functions*
// Create a function that multiplys 4 numbers and alerts the product
// function multiFourAndAlert(n1,n2,n3,n4){
//   alert(n1*n2*n3*n4)
// }
// multiFourAndAlert(2,3,4,5)
//
// // Create a function that divides one number by another and returns the remainder plus 10
// function divideReturnPlus10(n1,n2){
//   return (n1 % n2) + 10
// // }
// // console.log(divideReturnPlus10(10,3))
//
// // *Conditionals*
// // Create a function that adds three numbers and if the sum is greater than 1000 alert "Block Party"
// function addThreeAndCheck(num1,num2,num3){
//   let sum = num1 + num2 + num3
//   if(sum > 1000){
//     alert("Block Party")
//   }
// }
// addThreeAndCheck(1000,2,1)
// // Create a function that divides five numbers and if the quotient is divisible by 5 alert LINCOLN
// function divideFive(n1,n2,n3,n4,n5){
//   let result = n1/n2/n3/n4/n5
//   if(result % 5 === 0){
//     alert('LINCOLN')
//   }
// }
// divideFive(100,1,1,1,2)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x cubed times where x was the number passed in

// function printWordXTimes(word,num){
//   for(let i = 0; i < Math.pow(num,3); i++){
//     console.log(word)
//   }
// }
// printWordXTimes("party", 2)
