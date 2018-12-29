import React, { Component } from 'react';
import '../todo.styles.scss'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.todo,
            editMode: false,
        };
        
    }


    changeEditMode = () => {
        this.setState(prevState => ({
            editMode: !prevState.editMode,
        }))
    }

    listOptions = () => {
        return this.props.lists.filter((listOption) => {
            return listOption !== this.state.list
        }).map((listOption, index) => {
            return <li key={index} onClick={() => this.changeList(listOption)}> {listOption} </li>
        })
    }
    
    changeList = (newList) => {
        
         this.props.update({
            id: this.state.id,
            list: newList,
            done: this.state.done,
            task: this.state.task
        })
    }
    deleteTask = () => {
            this.props.update({
                id: this.state.id,
                list: this.state.list,
                done: this.state.done,
                task: this.state.task
            }, true)       
    }



    inputHandler = (event) => {
        if(event.target.value !== this.state.task && event.target.value !== ''){
            this.props.update({
                id: this.state.id,
                list: this.state.list,
                done: this.state.done,
                task: event.target.value
            });

            this.setState({ task : event.target.value})
        }
        this.changeEditMode();
    }

    checkTask = () => {     

        console.log(this.refs.isDone.checked);

        this.props.update({
            id: this.state.id,
            list: this.state.list,
            done: this.refs.isDone.checked,
            task: this.state.task
        });
    }

    render() {
    
        const listOptions = this.listOptions();

        return (
            <div key={this.state.id}>
                <span>
                    <input type="checkbox" ref="isDone" defaultChecked={this.state.done} onChange={() => this.checkTask()} name={`input_${this.props.id}`} id={`checkbox_${this.props.id}`} />
                </span>
                <span className={ this.state.done ? 'done' : ''}>

                {this.state.editMode ? <input type="text" defaultValue={this.state.task} 
                onKeyUp={(event) => {
                    if (event.key === 'Enter') {
                        this.inputHandler(event);
                    }
                }} 

              
                onBlur={this.inputHandler} /> : <span> {this.state.task} </span>}
                </span>

                <span >
                    <span onClick={this.changeEditMode}> Edit </span>
                    <span> Move to </span>
                    <span>
                        {listOptions}
                    </span>
                    <span onClick={this.deleteTask}> Delete </span>
                </span>
            </div>
        );
    }
    }

export default TodoItem;