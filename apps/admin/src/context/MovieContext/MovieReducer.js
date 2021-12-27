export const MovieReducer = (state, action) => {
    switch(state){
        case "GET_MOVIE_STARTED":
            return {
                movies: [],
                isFetching: true,
                error: false
            }
        case "GET_MOVIE_SUCCESS":
            return {
                movies: action.payload,
                isFetching: false,
                error: false
            }
        case "GET_MOVIE_FAILED":
            return {
                movies: [],
                isFetching: false,
                error: true
            }
        
        
        default:
            return { ...state }
    }
}