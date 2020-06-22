// @flow strict

import * as React from 'react';
import  CommentAdd  from "../comment-add/comment-add";


class CommentList extends React.Component{
    
    constructor(props){
       super(props) 
       this.state = {
           list:[]
       }
       this.addToList = this.addToList.bind(this)
       this.del = this.del.bind(this)

    }

    addToList(Comment){
        const {name,comment} = Comment
        console.log("哈哈哈哈")
        // this.state.list.push({name,comment})
        let list = this.state.list
        list.push({name:name,comment:comment})
        this.setState({
            list
        })
    }
    del(id){
        const ll  = this.state.list
        ll.splice(id,1)
        console.log(ll)
        this.setState({
            ll
        })
    }

    render() {
        return (
            <div>
                <CommentAdd addToList = {this.addToList} />
                body...
                {/* <input type="button" value="点击测试"  onClick= {this.addToList}/> */}
                {
                this.state.list.map((v,i)=>{
                   return <div key={i}>
                       {v.name}==={v.comment}-----
                        <input type="button" onClick={()=>{this.del(i)}} value="删除"/>
                   </div> 
                })}
            </div>
        );
    }
}


export default CommentList;