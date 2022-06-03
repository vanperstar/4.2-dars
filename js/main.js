var containerEl = document.createElement('div')
containerEl.className = 'container'
document.body.appendChild(containerEl)


function createRowEl(){
    let rowEl = document.createElement('div')
    rowEl.className = 'row g-2 mt-2 mb-2'
    return rowEl
}

// render select element
var selectRow = createRowEl()
containerEl.appendChild(selectRow)


var col1EL = document.createElement('div')
col1EL.className = 'col-3'
containerEl.appendChild(col1EL)




let uniqueYears = normalizeYears(movies)
let yearsSelect = createSelectEl(uniqueYears)

yearsSelect.addEventListener('change', (event) => {
    console.log(event.target.value)
    let foundedMovies = movies.filter(movie => movie.year == event.target.value)
    renderMovies(foundedMovies, moviesRow)
})
col1EL.appendChild(yearsSelect)
function createSelectEl (arr){
    let selectEL = document.createElement('select')
    selectEL.className = 'w-100'
    arr.forEach(year => {
        let optionEl = document.createElement('option')
        optionEl.value = year
        optionEl.textContent = year
        selectEL.appendChild(optionEl)
    });
    return selectEL
}




// Render movies


var moviesRow = createRowEl()
containerEl.appendChild(moviesRow)
renderMovies(movies, moviesRow)



function renderMovies(movies, parentElement){
    parentElement.innerHTML = null
    movies.forEach(movie => {
        let movieEL = createSingleMovie(movie)
        parentElement.appendChild(movieEL)
    });
}


function createSingleMovie(movie){
    let colEL = document.createElement('div')
    colEL.className = 'col-4 col-md-6 col-lg-4'

    let movieEL = document.createElement('div')
    movieEL.textContent = movie.title
    movieEL.className = 'p-2 border'
    colEL.appendChild(movieEL)

    let yearEL = document.createElement('div')
    yearEL.textContent = `Year:${movie.year}`
    movieEL.appendChild(yearEL)

    let genresEL = document.createElement('div')
    genresEL.textContent = movie.genres
    movieEL.appendChild(genresEL)
    return colEL
}