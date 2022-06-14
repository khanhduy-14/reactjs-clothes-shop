import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export const middewares=[thunk,logger];

export const store=createStore(rootReducer,applyMiddleware(...middewares));


export default store;