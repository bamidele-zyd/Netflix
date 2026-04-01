const BASE_URL = 'https://www.omdbapi.com/'
const API_KEY = '3ea75db5'

async function getMovies(searchWord){

    // "https://ondbapi.com?apikey=3ea75db5&s=movies"
    let url = BASE_URL + "?apikey=" + API_KEY + "&s=" + searchWord

    // go to the internet and fetch the movies
    let response = await fetch(url)

    let data = await response.json()
    console.log(data);

    // check if the movies came successfully

    if(data.Response === "True"){
        return data.Search
    }else{
        console.log("Sorry, No movies found")
        return []
    }
}

function showMovies(containerId, movielist){
    let container = document.getElementById(containerId)

    container.innerHTML = '';

    if(movielist.length === 0){
        container.innerHTML = "<p>No Movies Found</p>"
        return
    }

    // loop through such movie and create your movie card

    for(let movie = 0; movie < movielist.length; movie++){
        let card = document.createElement("div");
        card.className = "gachi"

        let image = movielist[movie].Poster

        if(image === "N/A"){
            image = ""
        }
        console.log(image)
        card.innerHTML = `<img src=${image}>`

        container.appendChild(card)

    }
}

async function startApp(){
    console.log("Website is Starting")
//    showMovies("old-gen-container", await getMovies("old"))
//    showMovies("new-gen-container", await getMovies("new"))
//    showMovies("romance-container", await getMovies("rom"))
//    showMovies("action-container", await getMovies("action"))
//    showMovies("psychological-container", await getMovies("mystery"))
}

document.addEventListener("DOMContentLoaded", startApp)