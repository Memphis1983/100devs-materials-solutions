// *Variables*
// Declare a variable and assign it to a sentance as a string.
// Alert if the sentance is a question

let string = "Is this the best week ever?";
alert(string.endsWith("?"));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev"
//with "software engineer", and print it to the console

let multiWord = "I am looking for jr. dev positions.";
console.log(multiWord.replaceAll("jr. dev", "software engineer"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  let random = Math.random();
  if (random < 0.33) {
    return "Rock";
  } else if (random < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and
//Create determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice) {
  let botChoice = rockPaperScissors();
  if (
    (choice === "rock" && bot_choice === "scissors") ||
    (choice === "paper" && botChoice === "rock") ||
    (choice === "scissors" && botChoice === "paper")
  ) {
    console.log("WINNA");
  } else if (choice === botChoice) {
    console.log("TIE");
  } else {
    console.log("LOSE");
  }
}
function checkWin(rock) {

//*Loops*
//Create a function that takes an array of choices.
//Play the game x times where x is the number of choices in the array.
// Print the results of each game to the console.
