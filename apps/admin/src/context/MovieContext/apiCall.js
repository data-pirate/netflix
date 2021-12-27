import { getMoviesStarted, getMoviesSuccess, getMoviesFailed } from "./MovieActions"
import axios from 'axios'

export async function getMovies(dispatch){
    getMoviesStarted();
    try{
        const res = await axios.get('/api/movies/all', {
            headers: {
                token: `Bearer ${JSON.parse(localStorage.getItem('user')).session.jwt}`
            }
        })

        dispatch(getMoviesSuccess(res.data));
    }catch(err){
        getMoviesFailed();
    }
}