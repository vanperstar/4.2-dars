function normalizeYears(movies){
    let years = movies.map(movie => movie.year - 0)
    let newArr = []

    years.forEach(y => {
        if(!newArr.includes(y))newArr.push(y)
    });

    for(let i=0; i < newArr.length; i++){
        for(j=0; j < newArr.length-1; j++){
            if(newArr[j] > newArr[j+1]){
                let temp = newArr[j]
                newArr[j] = newArr[j+1]
                newArr[j+1] = temp
            }
        }
    }
    return newArr
}


