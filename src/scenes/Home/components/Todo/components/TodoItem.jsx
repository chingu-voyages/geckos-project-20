import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.todo,
            editMode: false,
        }
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

    enterKeyHandler = (event) => {
        
        if (event.key === 'Enter') {
                        
            if(event.target.value !== this.state.task){
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
}

    outsideClickHandler = (event) => {
        if(event.target.value !== this.state.task){
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

    render() {
    

        const listOptions = this.listOptions();

        return (
            <div key={this.props.id}>
                <span>
                    <input type="checkbox" defaultChecked={this.state.done} name={`input_${this.props.id}`} id={`checkbox_${this.props.id}`} />
                </span>
                {this.state.editMode ? <input type="text" defaultValue={this.state.task} onKeyUp={this.enterKeyHandler} onBlur={this.outsideClickHandler} /> : <span> {this.state.task} </span>}

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