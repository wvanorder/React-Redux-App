import axios from 'axios';

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

export const fetchCharacters = (source = 'https://rickandmortyapi.com/api/character') => dispatch => {
    dispatch({ type: FETCH_CHARACTERS_START });

    axios
        .get(`${source}`)
        .then(res => {
            console.log('Success: ', res);
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('Error: ', err)
        })
};