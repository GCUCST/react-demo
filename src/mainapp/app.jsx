import React, { Component } from 'react'
// import { DECREMENT, INCREMENT } from "./action-types";
import * as actions from './actions'

export default class app extends Component {
    increment = () => {
        // 1. 得到选择增加的数量
        const number = this.select.value * 1;
        // 2.调用store方法更新状态
        this.props.store.dispatch(actions.incrementCreator(number));
      };
    
      decrement = () => {
        // 1. 得到选择增加的数量
        const number = this.select.value * 1;
        this.props.store.dispatch(actions.decrementCreator(number));
      };
    
      incrementIfOdd = () => {
        // 1. 得到选择增加的数量
        const number = this.select.value * 1;
        // 2.得到原本的count状态，计算新的count
        const count = this.props.store;
        // 3.
        if (count % 2 === 1)
          this.props.store.dispatch(actions.incrementCreator(number));
      };
      incrementAsync = () => {
        // 1. 得到选择增加的数量
        const number = this.select.value * 1;
        // 2.得到原本的count状态，计算新的count
        // 3.更新状态
        setTimeout(() => {
          this.props.store.dispatch(actions.incrementCreator(number));
        }, 1000);
      };
    
      render() {
        var count = this.props.store.getState();
        console.log(this.props.store.getState());
        // console.log("===========" + this.props.store.getState() + "===" + count);
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
