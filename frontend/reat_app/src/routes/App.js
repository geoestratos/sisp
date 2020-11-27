import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from '../containers/Dashboard'
import Login from '../containers/Login'
import '../assets/styles/App.scss'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/login' component={Login}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App
