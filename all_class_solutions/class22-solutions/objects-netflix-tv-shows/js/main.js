//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTVShows{
    constructor(title, genre,rating,numOfEp){
        this.title = title
        this.genre = genre
        this.rating = rating
        this.numOfEp = numOfEp
    }
    addToList(){
        alert('Added to list')
    }
    play(){
        alert('Show starting')
    }
    stop(){
        alert('Show stopping')
    }
}

let areYouAfraidOfTheDark = new MakeNetflixTVShows('Are you afraid of the dark', 'horror',4.5,94)