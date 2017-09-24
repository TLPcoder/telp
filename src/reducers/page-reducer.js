'use strict';
import * as types  from '../actions/action-types';
const initState = {
    currentPage: 1,
    previousPage: 1,
    nextPage: 2,
    range: [1, 10]
}
export default (state = initState, action) => {
    switch(action.type){
        case types.TOPAGE:
            return {...action.payload}
        case types.NEXT:
            return {...action.payload}
        case types.PREVIOUS:
            return {...action.payload}
        default:
            return state;
    }
}