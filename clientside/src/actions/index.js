import { SIGN_IN, SIGN_OUT } from './types';

export const signInAuth = () =>{
    return {
        type: SIGN_IN
    };
};

export const signOutAuth = () =>{
    return {
        type: SIGN_OUT
    };
};