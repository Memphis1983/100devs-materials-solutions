//Example fetch using pokemonapi.co
document.querySelector('#q').addEventListener('click', getFetch)
document.querySelector('#a').addEventListener('click', showAnswer)

let answer = ""

function getFetch(){

  const url = 'http://jservice.io/api/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = data[0].question  
        document.querySelector('h3').innerText = data[0].category.title
        answer = data[0].answer

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      
}
function showAnswer(){
  document.querySelector('h2').innerText = answer
}