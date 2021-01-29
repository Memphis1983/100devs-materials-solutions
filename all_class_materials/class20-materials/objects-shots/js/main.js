//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", getDrink)


function getDrink() {
  let drinkChoice = document.querySelector("input").value
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";+drinkChoice
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.drinks[0])
      console.log(data.drinks[0].strDrink)
      console.log(data.drinks[0].strInstructions)
      console.log(data.drinks[0].strDrinkThumb)
      document.querySelector("h2").innerText = drinks[0].strDrink
      document.querySelector("img").src = drinks[0].strDrinkThumb
      document.querySelector("h3").innerText = drinks[0].strInstructions
    })
    .catch(err => {
      console.log(`error ${err}`)
    })

}
