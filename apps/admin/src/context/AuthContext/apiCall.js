import axios from 'axios';
import {loginInitated, loginFailed, loginSuccess} from './AuthActions'

export async function login(user, dispatch){
    dispatch(loginInitated());
    try{
        const res = await axios.post('/api/auth/login', user);
        res.data.isAdmin && dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailed())
    }
}