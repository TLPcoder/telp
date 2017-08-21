import * as types from './action-types';

export const getPlaces = (payload) =>{
    console.log('action');
    return {type: types.GET_PLACES, payload}
}