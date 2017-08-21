'use strict';
import rootReducer from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import startForman from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

export default() => {
    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(startForman)
    }
};