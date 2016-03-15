import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './pages/layout.jsx';
import Settings from './pages/settings.jsx';
import Todos from './pages/todos.jsx';


const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Todos}></IndexRoute>
            <Route path='settings' component={Settings}></Route>
        </Route>
    </Router>,
    app);
