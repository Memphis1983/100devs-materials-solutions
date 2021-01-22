// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function openOrClose(arr){
  if( arr[0] < arr[ arr.length - 1 ] ){
    alert('Hi')
  }else if( arr[0] > arr[ arr.length - 1 ] ){
    alert('Bye')
  }else{
    alert('We close in an hour')
  }
}
