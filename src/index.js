import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import teamReducer from './reducer';
import './index.css';
import createLogger from 'redux-logger';
import createEngine from 'redux-storage-engine-localstorage';
import * as storage from 'redux-storage';

const logger = createLogger();
const engine = createEngine('review-storage');
const storageMiddleware = storage.createMiddleware(engine);

const store = createStore(teamReducer, applyMiddleware(logger, storageMiddleware));

const loadStorage = storage.createLoader(engine);
loadStorage(store)
    .then((newState) => {
      console.log('Loaded state:', newState)
    })
    .catch(() => console.log('Failed to load previous state'));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
