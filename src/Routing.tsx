import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Map from './components/Map'

export const Routing = (
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/map' component={Map}/>
        </div>
    </Router>
)