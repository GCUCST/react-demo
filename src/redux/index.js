import React, { Component } from 'react'
import {createStore} from 'redux'
import {counter} from './reducers'
import MyRedux from './myredux'
const store = createStore(counter);
 //内部会第一次调用函数
export default class Index extends Component {
    render() {
        return (
            <div>
                <MyRedux store={store}/>
            </div>
        )
    }
}
