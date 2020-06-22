import React, { Component } from 'react'
import {Route, Link,NavLink,Switch} from "react-router-dom"
import Home from './Home'
export default class routerDemo extends Component {
    render() {
        return (
            <div>
                  <Link to="/home" >跳转home</Link><br/>
                  <NavLink to="/user" >跳转user</NavLink>  //点击后有颜色
                  <Route path="/home" component={Home}/>
            </div>
        )
    }
}
