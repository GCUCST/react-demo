import React, { Component } from 'react'


import MyRedux from './myredux'
 //内部会第一次调用函数
export default class Index extends Component {
    render() {
        return (
            <div>
                <MyRedux />
            </div>
        )
    }
}
