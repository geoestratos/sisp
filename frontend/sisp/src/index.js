import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Dashboard from './Views/Dashboard/index'
import MecStatusDetail from './Views/Detail/MechanicStatusView/index'
import TrajectoryDetail from './Views/Detail/TrajectoryView/index'

//Components


ReactDOM.render( 
    <div>
        <BrowserRouter>
                <Switch>
                    <Route path="/mechanic-status/" component= {MecStatusDetail} />
                    <Route path="/trajectory/" component={TrajectoryDetail}/>
                    <Route path="/dashboard/" component={Dashboard}/>
                </Switch>
        </BrowserRouter>
    </div>
    
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
