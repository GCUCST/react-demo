import React, { Component } from 'react'


export default function MessageDetail(props) {

    //方法传入，必须使用props来接收
      const {id} = props.match.params
        return (
            <div>
                {id}
                MessageDetail
            </div>
        )
}
