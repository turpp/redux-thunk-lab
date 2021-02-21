import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import {createStore, applyMiddleware} from 'redux'
import catsReducer from './reducers/catsReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(catsReducer, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store} >
    <App />
    </Provider>,
    document.getElementById('root')
);

