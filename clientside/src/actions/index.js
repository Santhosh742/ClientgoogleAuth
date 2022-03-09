import stream from '../apis/stream';
import {
       SIGN_IN,
       SIGN_OUT, 
       CREATE_STREAM,
       FETCH_STREAMS, 
       FETCH_STREAM, 
       DELETE_STREAM, 
       EDIT_STREAM 
    } from './types';

export const signInAuth = userId =>{
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOutAuth = () =>{
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    console.log(userId)
const response = await stream.post('/streams', formValues);

dispatch({ type: CREATE_STREAM, payload: response.data});
};

export const fetchStreams = () => async dispatch => {
    const response = await stream.get('/streams');

    dispatch({type: FETCH_STREAMS, payload: response.data});
}

export const fetchStream = (id) => async dispatch =>{
    const response = await stream.get(`/streams${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data})
}

export const editStream = (id, formValues) => async dispatch =>{
    const response = stream.put(`/streams${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data})
}

export const deleteStream = (id) => async dispatch => {
    const response = stream.delete(`/streams${id}`);

    dispatch({ type: DELETE_STREAM, payload: id })
}