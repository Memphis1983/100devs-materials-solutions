//Create an array of movie titles. Loop through the array and add each element to the h2.
let movieTitles = ["fight","win","worldwide"]

// movieTitles.forEach((item, i) => {
//   document.querySelector('h2').innerText += item
// })
for(let i = 0; i < movieTitles.length; i++){
  document.querySelector('h2').innerText += movieTitles[i]
}


//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let nums = [1,2,3]

nums.forEach((item, i) => {
  nums[i] = item + 3
});

console.log(nums);

//Find the average of all the numbers from question two
let sum = 0
for(let i = 0; i<nums.length;i++){
  sum += nums[i]
}

console.log(sum / nums.length);
