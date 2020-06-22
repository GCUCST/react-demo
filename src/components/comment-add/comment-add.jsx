
import React from 'react';


class CommentAdd extends React.Component{
    constructor(props){
        super(props)
       
        this.fun = this.fun.bind(this)
    }

    fun(){
        let name =   this.refs.name.value;
        let comment = this.refs.comment.value;
        this.props.addToList({name:name,comment:comment})
        console.log(".........."+name)
    }

    render() {
        return (
            <div>
               <input type="text" ref="name" /><br/>
               <input   type="text"  ref="comment" /><br/>
                <button onClick={this.fun} >添加评论。</button>

            </div>
        );
    }
    
}


export default CommentAdd;