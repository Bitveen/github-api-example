/**
 *  Routes for App
 *  Matches:
 *  / - Show SearchBox where users can search another users from github api
 *  /profile/:id - Main profile component
 *  /profile/:id/main - Default view that users sees include profile picture and info
 */
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from 'App';
import SearchBox from 'SearchBox';
import Profile from 'Profile';
import ProfileMain from 'ProfileMain';


const Routes = ({ store }) => {
    return (
        <Router history={syncHistoryWithStore(browserHistory, store)}>
            <Route path='/' component={App}>
                <IndexRoute component={SearchBox} />
                <Route path='/profile/:id' component={Profile}>
                    <Route path='/profile/:id/main' component={ProfileMain} />
                </Route>
            </Route>
        </Router>
    );
};



export default Routes;
