'use strict';
import {fork} from 'redux-saga/effects';
import placeWatcher from './watchers/place-watchers';

export default function * startForman() {
    yield fork(placeWatcher);
}
