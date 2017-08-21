'use strict';
import {takeEvery} from 'redux-saga/effects';
import * as types from '../../actions/action-types';
import {place, placeInfo} from '../task/place-task'; 

export default function * placeWatcher() {
    yield takeEvery(types.GET_PLACES, place);
    yield takeEvery(types.GET_INFO, placeInfo);
}