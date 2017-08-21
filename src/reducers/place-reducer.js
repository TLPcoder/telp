'use strict';
import * as types from '../actions/action-types';
const initalState = {
    id:null,
    info: null
}
export default (state = initalState, action) => {
    switch(action.type){
        case types.GET_PLACES_SUCCESS:
            return {...state, id: action.payload};
        case types.GET_PLACES_FAIL:
            return {...state}
        case types.GET_INFO_SUCCESS:
            return {...state, info: action.payload};
        case types.GET_INFO_FAIL:
            return {...state}
        default:
            return state
    }
}