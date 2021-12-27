export const getMoviesStarted = ()=>({
    type: "GET_MOVIE_STARTED"
})

export const getMoviesSuccess = (movies)=>({
    type: "GET_MOVIE_SUCCESS",
    payload: movies
})


export const getMoviesFailed = ()=>({
    type: "GET_MOVIE_FAILED"
})

