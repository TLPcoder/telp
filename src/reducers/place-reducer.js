'use strict';
import * as types from '../actions/action-types';
export default (state = null, action) => {
    switch(action.type){
        case types.GET_PLACES_SUCCESS:
            return {...action.payload};
        case types.GET_PLACES_FAIL:
            return {...state}
        default:
            return state
    }
}