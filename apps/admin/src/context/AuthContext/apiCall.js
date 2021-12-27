import axios from 'axios';
import {loginInitated, loginFailed, loginSuccess} from './AuthActions'

export async function login(user, dispatch){
    dispatch(loginInitated());
    try{
        const res = axios.post('/api/auth/login', user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailed())
    }
}