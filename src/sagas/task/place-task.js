'use strict';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/action-types';

export function * place({payload}) {
    const config = {
        method: 'GET',
        url: `http://localhost:8080/yelp/search`,
        headers: {
            query: JSON.stringify(payload),
            'Content-Type': 'application/json',
        }
    };
    try {
        const photoIds = yield call(axios, config);
        yield put({type: types.GET_PLACES_SUCCESS, payload: {photoIds, searchTerm: payload}});
    } catch (err) {
        yield put({type: types.GET_PLACES_FAIL, err});
    }
}

export function * offset({payload}) {
    const config = {
        method: 'GET',
        url: `http://localhost:8080/yelp/search`,
        headers: {
            query: JSON.stringify(payload.query),
            'Content-Type': 'application/json',
            offset: payload.offset
        }
    };
    try {
        const photoIds = yield call(axios, config);
        photoIds.data = payload.placeData.concat(photoIds.data);
        yield put({type: types.GET_PLACES_SUCCESS, payload: {photoIds, searchTerm: payload.query}});
    } catch (err) {
        yield put({type: types.GET_PLACES_FAIL, err});
    }
}