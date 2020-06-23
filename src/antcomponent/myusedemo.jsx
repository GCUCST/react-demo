import React, { Component } from 'react'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

export default class MyUseDemo extends Component {

      showToast=()=> {
        // Toast.fail('Load failed !!!', 1);
        Toast.hide()
      }

    //  loadingToast=()=> {
    //     Toast.success('完成。。...', 10, () => {
    //       console.log('Load complete !!!');
    //     });
    //   }

    render() {
        return (
            <div>
                 {/* {/* <Button type="primary" onClick={this.loadingToast}>提交</Button> */}
                 <Button type="primary" onClick={this.showToast}>关闭</Button> 
            </div>
        )
    }
}
