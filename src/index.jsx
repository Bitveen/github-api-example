/**
 * Entry point for Application
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import Routes from 'Routes';
import rootReducer from 'reducers';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    console.log(store.getState());
});


render(
    <Provider store={store}>
        <Routes store={store} />
    </Provider>
,document.getElementById('app'));
