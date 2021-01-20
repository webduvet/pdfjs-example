import {
  combineReducers,
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  Hooks
} from 'redux-action-hooks';

import pdfjs from './pdfjs/reducer'

const reducers = combineReducers({
  pdfjs
});

export default reducers;

/* eslint-disable no-underscore-dangle */

/* istanbul ignore next  */
const store_ = createStore(reducers, (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
    applyMiddleware(thunk, logger, Hooks)
  ))

export const store = store_;
