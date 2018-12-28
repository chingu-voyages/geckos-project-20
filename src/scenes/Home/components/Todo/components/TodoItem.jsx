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


    changeEditMode = () => {
        this.setState(prevState => ({
            editMode: !prevState.editMode,
        }))
    }



    listOptions = () => {
        return this.props.lists.filter((listOption) => {
            return listOption !== this.state.list
        }).map((listOption, index) => {
            return <li key={index} onClick={() => this.props.update({
                id: this.state.id,
                list: listOption,
                done: this.state.done,
                task: this.state.task
            })}> {listOption} </li>
        })
    }
    render() {

        const listOptions = this.listOptions();

        return (
            <div key={this.props.id}>
                <span>
                    <input type="checkbox" defaultChecked={this.state.done} name={`input_${this.props.id}`} id={`checkbox_${this.props.id}`} />
                </span>
                {this.state.editMode ? <input type="text" defaultValue={this.state.task} onKeyUp={(event)=>{
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
                }} onBlur={(event) => {
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
                }} /> : <span> {this.state.task} </span>}


                <span >
                    <span onClick={this.changeEditMode}> Edit </span>
                    <span> Move to </span>
                    <span>
                        {listOptions}
                    </span>
                    <span onClick={() => {
                        this.props.update({
                            id: this.state.id,
                            list: this.state.list,
                            done: this.state.done,
                            task: this.state.task
                        }, true)
                    }}> Delete </span>
                </span>
            </div>
        );
    }
}

export default TodoItem;