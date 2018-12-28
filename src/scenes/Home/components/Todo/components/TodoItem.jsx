import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.todo,
            editMode: false,
        }
    }

    updateTask = (option) => {
        if (option === 'delete') {
            this.props.update({
                id: this.state.id,
                list: this.state.list,
                done: this.state.done,
                task: this.state.task
            }, true)
        }
        else {
            this.props.update({
                id: this.state.id,
                list: this.state.list,
                done: this.state.done,
                task: this.state.task
            })
        }
    }

    editHandler = (event) => {

        console.log('State Task Value Before SS: ', this.state.task)
        console.log('Event target Value before', event.target.value)

        if (this.state.task !== event.target.value) {

            this.setState({
                task: event.target.value
            })

            this.updateTask();

            console.log('State Task Value After SS: ', this.state.task);

        }
    }
    changeEditMode = () => {
        this.setState(prevState => ({
            editMode: !prevState.editMode,
        }))
    }

    changeList = (listOption) => {
        this.setState({
            list: listOption
        })
        console.log('This is the list option', listOption);
        this.updateTask()
    }

    listOptions = () => {
        return this.props.lists.filter((listOption) => {
            return listOption !== this.state.list
        }).map((listOption, index) => {
            return <li key={index} onClick={() => this.changeList(listOption)}> {listOption} </li>
        })
    }

    keyUpHandler = event => {
        if (event.key === 'Enter') {
            this.editHandler(event);
            this.changeEditMode();
        }
    }

    deleteHandler = () => {
        this.updateTask('delete');
    }

    blureHandler = (event) => {
        this.editHandler(event);
        this.changeEditMode();
    }
    render() {

        const listOptions = this.listOptions();

        return (
            <div key={this.props.id}>
                <span>
                    <input type="checkbox" defaultChecked={this.state.done} name={`input_${this.props.id}`} id={`checkbox_${this.props.id}`} />
                </span>
                {this.state.editMode ? <input type="text" defaultValue={this.state.task} onKeyUp={this.keyUpHandler} onBlur={this.blureHandler} /> : <span> {this.state.task} </span>}


                <span >
                    <span onClick={this.changeEditMode}> Edit </span>
                    <span> Move to </span>
                    <span>
                        {listOptions}
                    </span>
                    <span onClick={this.deleteHandler}> Delete </span>
                </span>
            </div>
        );
    }
}

export default TodoItem;