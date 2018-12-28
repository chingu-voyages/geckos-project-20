import React , { Component } from 'react';

class TodoItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            ...props.todo,
            editMode:false,
        }
    }

    updateTask = () => {
        this.props.update({
            id:this.state.id,
            list: this.state.list,
            done: this.state.done,
            task: this.state.task
        })
    }

    editHandler = (event) => {
        this.setState({
            task: event.target.value
        })

        this.updateTask();
    }
    changeEditMode = () => {
        this.setState( prevState => ({
            editMode: !prevState.editMode,
        }))
    }
    render(){
        return (
            <div>
               <span> 
                   <input type="checkbox"  defaultChecked={this.state.done}  name={`input_${this.state.id}`} id={`checkbox_${this.state.id}`}/> 
                </span> 
                { this.state.editMode ?  <input type="text" value={this.state.task} onBlur={this.changeEditMode} onChange={this.editHandler}/> : <span> {this.state.task} </span>  }
                          
                 
                   <span onClick={this.changeEditMode}> ... </span>
            </div>
        );
    }
}

export default TodoItem;