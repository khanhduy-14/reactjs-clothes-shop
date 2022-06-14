import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware=createSagaMiddleware();
export const middewares=[thunk,logger,sagaMiddleware];

export const store=createStore(rootReducer,applyMiddleware(...middewares));

sagaMiddleware.run(rootSaga);

export default store;