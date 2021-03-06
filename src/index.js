import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/App';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import 'bootstrap/dist/css/bootstrap.min.css';
const sagaMiddleware = createSagaMiddleware();
// axios.defaults.baseURL = 'https://www.quandl.com/api/v3/datasets';
// axios.defaults.baseURL = 'https://www.alphavantage.co/'
axios.defaults.baseURL = 'http://api.marketstack.com/v1'
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
