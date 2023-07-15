import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { countReducer } from './reducers/countReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(userReducer, applyMiddleware( thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
