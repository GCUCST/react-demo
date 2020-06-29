import React from 'react';
import './App.css';
// import ComponentList from './components/comment-list/comment-list'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import About from './views/about';
import Home from './views/home';
import MyUseDemo from './antcomponent/myusedemo'
import MyRedux from './myredux/MyRedux'
import Index from './redux/index'
function App() {

  return (
    <div className="App">
      {/* <ComponentList />
      <RouterDemo /> */}
      {/* <div>
          <h1>路由demo</h1>
          <div>
              <NavLink to="/about">about</NavLink><br/>
              <NavLink to="/home">home</NavLink>
          </div>
          <div>
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
                <Redirect from= "/" to="/about"/>
              </Switch>

          </div>

      </div> */}
      {/* <MyUseDemo /> */}
      {/* <MyRedux/> */}
      <Index/>
    </div>
  );
}

export default App;
