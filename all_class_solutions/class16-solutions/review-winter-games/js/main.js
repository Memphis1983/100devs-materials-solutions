//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function newArrEven(arr){
  let newArr = []
  arr.forEach((item, i) => {
    if(item % 2 === 0){
      newArr.push(item)
    }
  });
  return newArr
}
console.log(newArrEven([1,2,3,4,5]))
