import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//redux 
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {Provider} from 'react-redux'
import rootReducer from './services/reducer/RootReducer'

const store= createStore(rootReducer,applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
