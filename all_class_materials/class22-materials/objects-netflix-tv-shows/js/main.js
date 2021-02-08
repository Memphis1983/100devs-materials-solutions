//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class MakeNetflixTvShows {
  constructor(title, genre, rating, numOfEp) {
    this.title = title
    this.genre = genre
    this.rating = rating
    this.numOfEp = numOfEp
  }
  addToList() {
    alert("Added to the list")
  }
  play() {
    alert("Show starting")
  }
  stop() {
    alert("Show stopping")
  }
}

let areYouAfraidOfTheDark = new MakeNetflixTvShows("areYouAfraidOfTheDark", "horror", 4.5, 94);
