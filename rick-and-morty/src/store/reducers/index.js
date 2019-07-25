import {
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE
} from '../actions';

export const initialState = {
    isLoading: false,
    error: '',
    characters: null,
    nextPage: '',
    prevPage: '',
};


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS_START:
            return{
                ...state,
                isLoading: true,
                error: '',
                characters: [],
                nextPage: state.nextPage,
                prevPage: state.prevPage
            };
        case FETCH_CHARACTERS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                error: '',
                characters: action.payload.results,
                nextPage: action.payload.info.next,
                prevPage: action.payload.info.prev
            }
       
        
        default:
            return state;
    }
}