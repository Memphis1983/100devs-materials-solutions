//--- Easy
//create a variable and assign it a number
let bob = 100
//minus 10 from that number
bob = bob - 10
//print that number to the console
console.log(bob);
//--- Medium
//create a variable that holds a value from the input
// let inVal = document.querySelector('#danceDanceRevolution').value
// //add 25 to that number
// inVal = inVal + 25
// //alert that number
// alert(inVal)
//--- Hard
//create a variable that holds the h1
const headingOne = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
headingOne.addEventListener('click', add)

function add(){
  let inVal = parseInt(document.querySelector('#danceDanceRevolution').value)
  inVal = inVal + 25
  console.log(bob + inVal)
}
