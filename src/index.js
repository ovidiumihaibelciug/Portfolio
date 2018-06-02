import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './assets/scss/App.css';

import createBrowserHistory from "history/createBrowserHistory";
import { routes } from './routes'

const history = createBrowserHistory();


ReactDOM.render(
    <HashRouter history={history}>
        <React.Fragment>
            {routes.map(route => (
            <Route exact path={route.path} component={route.component} />
            ))}
        </React.Fragment>
    </HashRouter>, document.getElementById('root')
);
registerServiceWorker();
