import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import roodReducer from './root-reducer';

const middleware = [logger];

const store = createStore(roodReducer, applyMiddleware(...middleware));

export default store;