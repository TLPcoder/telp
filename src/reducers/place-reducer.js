'use strict';
import * as types from '../actions/action-types';
export default (state = null, action) => {
    console.log(action.type, action.payload)
    switch(action.type){
        case types.GET_PLACES_SUCCESS:
            return {...action.payload};
        case types.GET_PLACES_FAIL:
            return {...state}
            case types.BACK:
            return {...action.payload}
        default:
            return state
    }
}