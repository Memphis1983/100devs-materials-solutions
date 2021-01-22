//Create a function that takes in an array of numbers. Multiply each number together and alert the product.


function multiArray(arr){
  let product = 1
  arr.forEach((item, i) => {
    product *= item
  })
  // for(let i = 0;i < arr.length; i++){
  //   product = product * arr[i]
  // }
  alert(product)

}
multiArray([1,2,3,4,5])
