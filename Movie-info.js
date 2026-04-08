const BASE_URL = 'https://www.omdbapi.com/'
const API_KEY = '3ea75db5'

const getMovieDetail = async (ID) => {
    const url = `${BASE_URL}?apikey=${API_KEY}&i=${ID}&plot=full`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const displayMovieDetails = (movie) => {
    if(movie.Response === "False"){
        document.body.innerHTML = "<p>No Movie Selected</p>"
        return
    }

    document.getElementById("poster").src = movie.Poster
    document.getElementById('title').textContent = movie.Title
    document.getElementById('genre').textContent = movie.Genre
    document.getElementById('language').textContent = movie.Language

}


function goback(){
    window.history.back()
}

const loadMovieDetail = async () => {
    const urlparam = new URLSearchParams(window.location.search)
    const imdbID = urlparam.get('id')

    if(!imdbID){
        document.body.innerHTML = "<p>No Movie Selected</p>"
        return
    }
    const movie = await getMovieDetail(imdbID)
    displayMovieDetails(movie)
    console.log(movie)
}

document.addEventListener('DOMContentLoaded', loadMovieDetail)