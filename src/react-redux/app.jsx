import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { DECREMENT, INCREMENT } from "./action-types";
// import * as actions from './actions'

import {connect} from 'react-redux'

import {incrementCreator,decrementCreator} from './actions'

 class App extends Component {

    static propTypes = {
      count:PropTypes.number.isRequired,
      incrementCreator:PropTypes.func.isRequired,
      decrementCreator:PropTypes.func.isRequired
    }
    increment = () => {
        // 1. 得到选择增加的数量.
        const number = this.select.value * 1;
        // 2.调用store方法更新状态
        this.props.incrementCreator(number);
      };
    
      decrement = () => {
        // 1. 得到选择增加的数量
        const number = this.select.value * 1;
        this.props.decrementCreator(number);

      };
    
      incrementIfOdd = () => {
        // 1. 得到选择增加的数量
        const number = this.select.value * 1;
        // 2.得到原本的count状态，计算新的count
        const count = this.props.store;
        // 3.
        if (count % 2 === 1)
        this.props.incrementCreator(number);

      };
      incrementAsync = () => {
        // 1. 得到选择增加的数量
        const number = this.select.value * 1;
        // 2.得到原本的count状态，计算新的count
        // 3.更新状态
        setTimeout(() => {
          this.props.incrementCreator(number);

        }, 1000);
      };
    
      render() {
        const count = this.props.count
        return (
          <div>
            <p>click {count} times</p>
            <select ref={(select) => (this.select = select)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <br />
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.incrementIfOdd}>increment if odd</button>
            <button onClick={this.incrementAsync}>increment async</button>
          </div>
        );
      }
}


export default connect(
  state=>({count:state}),{incrementCreator,decrementCreator}
)(App)