import React , { Component } from 'react';

class TodoItem extends Component {



    
    render(){
        return (
            <div>
               <span> <input type="checkbox"  defaultChecked={this.props.todo.done}  name={`input_${this.props.todo.id}`} id={`checkbox_${this.props.todo.id}`}/> </span> {this.props.todo.task} <span>  </span> <span> ... </span>
            </div>
        );
    }
}

export default TodoItem;