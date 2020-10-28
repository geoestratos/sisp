import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Iframe from 'react-iframe'

import MecStatusDetail from '../Detail/MechanicStatusView'
import TrajectoryDetail from '../Detail/TrajectoryView'

function Dashboard(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/mechanic-status/" component= {MecStatusDetail} />
                <Route path="/trajectory/" component={TrajectoryDetail}/>
            </Switch>
        </BrowserRouter>

    )
}

export default Dashboard;