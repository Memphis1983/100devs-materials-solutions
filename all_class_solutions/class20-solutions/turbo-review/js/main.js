// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let positiveAff = "You are beautiful"
console.log(`Again: ${positiveAff.repeat(24)}`)

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it
let word = ['T','e','s','l','a']
alert(word.join(''))

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function rpsls(){
  let random = Math.random()
  if(random < .2){
    return 'rock'
  }else if(random < .4){
    return 'paper'
  }else if (random < .6) {
    return 'scissors'
  }else if (random < .8) {
    return 'lizard'
  }else{
    return 'spock'
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice){
  let botChoice = rpsls()
  if((choice === 'rock' && botChoice === 'scissors') || (choice === 'paper' && botChoice === 'rock') || (choice === 'scissors' && botChoice === 'paper') || (choice === 'spock' && botChoice === 'rock') || (choice === 'spock' && botChoice === 'scissors') || (choice === 'lizard' && botChoice === 'paper') || (choice === 'lizard' && botChoice === 'spock') || (choice === 'scissors' && botChoice === 'lizard') || (choice === 'paper' && botChoice === 'spock') || (choice === 'rock' && botChoice === 'lizard')){
    console.log('won')
  }else if(choice === botChoice){
    console.log('tie')
  }else{
    console.log('lose')
  }
}
checkWin('spock')
