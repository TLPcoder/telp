'use strict';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/action-types';
//`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0bf
//0839ee1fe6ee109720782d7ec8a63&safe_search=1&has_geo=true&lat=${lat}&lon=${lng}
//&radius=${radius}&accuracy=11&tags=${tag}&sort=${imageSort}&per_page=${imagesL
//oaded}&radius_units=mi&format=json&nojsoncallback=1`
export function * place({payload}) {
    const config = {
        method: 'GET',
        url: `http://localhost:8080/yelp/search`,
        headers: {
            query: payload,
            'Content-Type': 'application/json'
        }
    };
    try {
        const photoIds = yield call(axios, config);
        yield put({type: types.GET_PLACES_SUCCESS, payload: photoIds});
    } catch (err) {
        yield put({type: types.GET_PLACES_FAIL, err});
    }
}