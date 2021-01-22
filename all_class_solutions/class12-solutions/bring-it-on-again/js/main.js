// *Variables*
// Declare a variable, assign it a value, and alert the value
let dog = "Dog"
alert(dog)

// Create a variable, divide it by 10, and console log the value
let num = 50
num = num / 10
console.log(num);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiThree(n1,n2,n3){
  alert(n1*n2*n3)
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNums(n1,n2,n3,n4){
  console.log(n1+n2-n3-n4);
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNumHundred(n1,n2,n3){
  let total = 100
  total = total + n1
  total = total - n2
  total = total / n3
  if(total > 25){
    console.log('WE HAVE A WINNNA');
  }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function dayOfWeek(day){
  day = day.toLowerCase()
  if(day === "saturday" || day === "sunday"){
    alert("weekend")
  }else if(day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
    alert("week day")
  }else{
    alert("Try Again!")
  }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function countByThree(num){
  for(let i = 1; i<= num;i+=3){
    console.log(i);
  }
}
