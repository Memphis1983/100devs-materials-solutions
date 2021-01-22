// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = "bread sticks"
food = 'Dominos Pizza'
alert(food)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let s = "Bob"
alert( s.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divTwoMulti(n1,n2,n3){
  alert(n1/n2*n3)
}
divTwoMulti(2,3,4)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cRoot(n1){
  console.log( Math.cbrt(n1) );
}
cRoot(64)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summerMonth(m){
  m = m.toLowerCase()
  if(m === 'june' || m === 'july' || m === 'august'){
    alert('YAY')
  }else{
    alert('Booo')
  }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skip5(n1){
  for(let i = 1; i <= n1;i++){
    if(i%5 !== 0){
      console.log(i);
    }
  }
}
