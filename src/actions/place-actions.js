import * as types from './action-types';

export const getPlaces = (payload) => ({type: types.GET_PLACES, payload});
export const currentLocation = (payload) => ({type: types.CURRENT_LOCATION, payload});