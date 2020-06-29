import React, { Component } from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import News from './news'
import Message from './message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink to="/home/news" >to news</NavLink></li>
                    <li><NavLink to="/home/message"  >to message</NavLink></li>
                </ul>
                <div>
                    <Route path="/home/news" component={News}></Route>
                    <Route path="/home/message" component={Message}></Route>
                    <Redirect from="/home" to="/home/news"/>
                </div>
            </div>
        )
    }
}
