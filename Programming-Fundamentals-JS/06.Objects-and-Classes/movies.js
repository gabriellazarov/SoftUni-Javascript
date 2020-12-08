function movies(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        arr[i] = input[i].split(" ");
    }
    let movies = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == "addMovie") {
            let str = arr[i][1];
            for (let d = 2; d < arr[i].length; d++) {
                str += ' ' + arr[i][d];
            }
            movies.push(str);
        } else if (arr[i].includes("directedBy")) {
            let name = arr[i].slice(0, arr[i].indexOf("directedBy"));
            if (movies.includes(name.join(' '))) {
                let director = arr[i].slice(arr[i].indexOf("directedBy"));
                movies.splice(movies.indexOf(name.join(' ')) + 1, 0, director);
            }
        } else {
            let date = arr[i].slice(0, arr[i].indexOf("onDate"));
            if (movies.includes(date.join(' '))) {
                let datemhm = arr[i].slice(arr[i].indexOf("onDate"));
                movies.splice(movies.indexOf(date.join(' ')) + 1, 0, datemhm);
            }
        }
    }
    for (let i = 0; i < movies.length; i++) {
        if (movies[i][0] != "directedBy" && movies[i][0] != "onDate") {
            if ((movies[i + 1][0] == "directedBy" || movies[i + 1][0] == "onDate") && (movies[i + 2][0] == "directedBy" || movies[i + 2][0] == "onDate")) {
                let movie = new Object();
                movie.name = movies[i];
                if (movies[i + 1][0] == "directedBy") {
                    let temp = movies[i + 1].slice(1);
                    movie.director = temp.join(' ');
                    movie.date = movies[i + 2][1];
                } else {
                    let temp = movies[i + 2].slice(1);
                    movie.director = temp.join(' ');
                    movie.date = movies[i + 1][1];
                }
                console.log(JSON.stringify(movie));
            }
        }
    }
}


movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);