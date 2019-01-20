import React, { Component } from 'react';
import Toggle from './Toggle';
import { ToggleActivator, ToggleContent, Divider, Element} from './StyledComponents'
import '../todo.styles.scss'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.todo,
            editMode: false,
        };
    }

    render() {
        const listOptions = this.listOptions();
        return (
            <div key={this.state.id} className="todoFeature__todoList__todoItem">
                <span className="todoFeature__todoList__todoItem__checkbox">
                    <input type="checkbox" ref="isDone" defaultChecked={this.state.done} onChange={() => this.checkTask()} name={`input_${this.props.id}`} id={`checkbox_${this.props.id}`} />
                </span>
                <span    >

                { this.state.editMode ? 
                    <input type="text" 
                    className={ this.state.done ? 'todoFeature__todoList__todoItem__input--editMode done' : 'todoFeature__todoList__todoItem__input--editMode'}
                        ref={(input) => input ? input.focus() : void 0 } 
                        defaultValue={this.state.task} 
                        onKeyUp={(event) => {
                            if (event.key === 'Enter') {
                                this.inputHandler(event);
                            }
                        }} 
                        onBlur={this.inputHandler} /> : <span
                        onDoubleClick={this.changeEditMode}
                        className={ this.state.done ? 'todoFeature__todoList__todoItem__input done' : 'todoFeature__todoList__todoItem__input'}> 
                         {this.state.task} </span>
                }
                </span>

                
                    {/* <span className="todoFeature__todoList__todoItem__options">
                        <i className="fa fa-ellipsis-h"></i>
                    </span>
                    
                    <span >
                        <span onClick={this.changeEditMode}> Edit </span>
                        <span> Move to </span>
                        <span>
                            {listOptions}
                        </span>
                        <span onClick={this.deleteTask}> Delete </span>
                    </span> */}
                    <Toggle>
                    <ToggleActivator>
                    {/* <span className="todoFeature__todoList__todoItem__options"> */}
                            <i className="fa fa-ellipsis-h"></i>
                    {/* </span> */}
                    </ToggleActivator>
                    <ToggleContent id="activeList">
                            <Element onClick={this.changeEditMode}> Edit</Element>
                            <Element>Move to </Element>
                            {listOptions}
                            <Element onClick={this.deleteTask}>Delete</Element>
                    </ToggleContent> 
                </Toggle>
            </div>
        );
    }

    changeEditMode = () => {
        if (!this.state.editMode){
            // console.log('EditInput' , this.editInput);
            // this.editInput.focus();
        }
        this.setState(prevState => ({
            editMode: !prevState.editMode,
        }))
    }

    listOptions = () => {
        return this.props.lists.filter((listOption) => {
            return listOption !== this.state.list
        }).map((listOption, index) => {
            return <Element key={index} onClick={() => this.changeList(listOption)}> {listOption} </Element>
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

        console.log('Menjam ga state',this.refs.isDone.checked);

        this.setState({done: this.refs.isDone.checked});

        this.props.update({
            id: this.state.id,
            list: this.state.list,
            done: this.refs.isDone.checked,
            task: this.state.task
        });
    }
    

    }

export default TodoItem;