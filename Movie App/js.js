
document.addEventListener('DOMContentLoaded', () => {

const main = document.getElementById("main");

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const sectionsArray = ["Trending Now","Romantic Movies","Comedie Movies","Action Movies"];


//create Sections

for(let i=0; i<sectionsArray.length; i++)
    sections(sectionsArray[i]);


function sections(header){

    const section = document.createElement('section');

    section.classList.add('container');

    section.innerHTML=`
    
            <h1 class="title">${header}</h1>

            <button class="btn prev"><span class="iconify" data-icon="topcoat:next" style="color: white;" data-width="35" data-flip="horizontal"></span></button>

            <button class="btn next"><span class="iconify" data-icon="topcoat:next" style="color: white;" data-width="35"></span></button>

            <div class="movies"> </div>
    
    `

    main.appendChild(section);

}



const box = document.querySelectorAll('.movies')

const btns = document.querySelectorAll(".btn");

const prev = document.querySelectorAll(".prev");

const next = document.querySelectorAll(".next")

const containers = document.querySelectorAll(".container");




/******************** API ********************/



const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies containers

getMovies(API_URL,0);
getMovies(SEARCH_API + 'romance',1);
getMovies(SEARCH_API + 'funny',2);
getMovies(SEARCH_API + 'action',3);


async function getMovies(url,container) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results , container);
}

function showMovies(movies , container) {

     box[container].innerHTML = ''

            movies.forEach((movie) => {
                const { title, poster_path, vote_average, overview } = movie

                const movieEl = document.createElement('div');

                movieEl.classList.add('item');

                movieEl.innerHTML = `
                    <img class="image" src="${IMG_PATH + poster_path}" alt="${title}">

                    <div class="movie-info">
                        <h3>${title}</h3>
                        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                    </div>
                  
                    
                    <div class="overview">
                         <h3>Overview</h3>
                         <p> ${overview} </p>
                    </div> 
                `
                box[container].appendChild(movieEl); });

        }
    


function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm,0);
        const title = document.querySelectorAll('.title');

        title[0].textContent="Results: "+searchTerm;
        search.value = ''
    } else {
        window.location.reload()
    }
})


// ********************* Buttons ************************

let x = window.matchMedia("(max-width: 740px)")


Media(x);


function Media(x){

    if(x.matches){

        containers.forEach( function(container){
            container.removeEventListener("mouseover") });
    
    }

    else{

            for(let i=0; i<containers.length; i++){

                containers[i].addEventListener("mouseover", function(){
                                
                    next[i].style.display="block";
                    prev[i].style.display="block";
                
                    if (Math.abs(box[i].scrollLeft) === box[i].scrollWidth - box[i].clientWidth ){
                        next[i].style.display="none";
                    }
                
                    if (Math.abs(box[i].scrollLeft) === 0 ){
                        prev[i].style.display="none";
                    }
                            } );


                containers[i].addEventListener("mouseout", function(){
                    next[i].style.display="none";
                    prev[i].style.display="none";

                });
                
            }
};
};

  


// ********************* Scroll ************************

for(let i=0; i<btns.length; i++){

next[i].addEventListener("click", function(){
    slide('right',i); });

prev[i].addEventListener("click", function(){
     slide('left',i); });

}

function slide(direction,index){

    scrollCompleted = 0;

    var slideVar = setInterval(function(){
        if(direction == 'left'){
            box[index].scrollLeft -= 410;
        } else {
            box[index].scrollLeft += 410;
        }

        scrollCompleted += 410;
        if(scrollCompleted >= 950){
            window.clearInterval(slideVar);
        }
    }, 200);
}



});