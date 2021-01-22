document.querySelector('h1').addEventListener('click', resLoop)

function resLoop(){
  let res = document.querySelector('#resolution').value
  for(let i = 0; i < 365;i++){
    document.querySelector('#letsGo').innerText += ` ${res} `
  }
}

//Create a function that has a loop that prints your resolution 365 times to the console and then call that function

//Bonus can you make it print your resolution 365 times to the DOM?
