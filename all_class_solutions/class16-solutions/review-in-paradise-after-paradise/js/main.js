// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function arrayOpen(dino){
  if(dino[0] < dino[dino.length - 1]){
    alert("Hi")
  }else if(dino[0] > dino[dino.length - 1]){
    alert("Bye")
  }else{
    alert("We close in an hour")
  }
}
arrayOpen([1,2,3,4,5])
