'use strict'
import * as types from './action-types';

export const nextPage = (payload) => ({type: types.NEXT, payload});
export const previousPage = (payload) => ({type: types.PREVIOUS, payload});
export const toPage = (payload) => ({type: types.TOPAGE, payload});
export const setSearch = (payload) => ({type: types.SET_PLACE, payload});
export const back = (payload) => ({type: types.BACK, payload});