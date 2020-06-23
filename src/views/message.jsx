import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import MessageDetail from './message-detail'

export default class Message extends Component {
    render() {
        return (
            <div>
                Message<br/>
                <NavLink to="/home/message/messagedetail/1">1</NavLink><br/>
                <NavLink to="/home/message/messagedetail/2">2</NavLink>
                <div>
                    <Route path="/home/message/messagedetail/:id" component={MessageDetail}></Route>
                </div>
            </div>
        )
    }
}
