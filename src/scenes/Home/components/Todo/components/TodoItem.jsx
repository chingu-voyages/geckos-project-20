import React, { Component } from 'react';
import Toggle from '../../Toggle';
import { Todo } from './TodoStyledComponents';
import { Activator, Content, Divider, Element } from '../../HomeStyledComponents';
import '../todo.styles.scss';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.todo,
            editMode: false,
        };
    }

    render() {
        const listOptions = this.listOptions(this.props);
        return (
            <Todo draggable="true" key={this.state.id}>
                <span className="todoFeature__todoList__todoItem__checkbox">
                    <input
                        type="checkbox"
                        ref="isDone"
                        defaultChecked={this.state.done}
                        onChange={() => this.checkTask()}
                        name={`input_${this.props.id}`}
                        id={`checkbox_${this.props.id}`}
                    />
                </span>
                <span>
                    {this.state.editMode ? (
                        <input
                            type="text"
                            className={
                                this.state.done
                                    ? 'todoFeature__todoList__todoItem__input--editMode done'
                                    : 'todoFeature__todoList__todoItem__input--editMode'
                            }
                            ref={input => (input ? input.focus() : void 0)}
                            defaultValue={this.state.task}
                            onKeyUp={event => {
                                if (event.key === 'Enter') {
                                    this.inputHandler(event);
                                }
                            }}
                            onBlur={this.inputHandler}
                        />
                    ) : (
                        <span
                            onDoubleClick={this.changeEditMode}
                            className={
                                this.state.done
                                    ? 'todoFeature__todoList__todoItem__input done'
                                    : 'todoFeature__todoList__todoItem__input'
                            }
                        >
                            {this.state.task}{' '}
                        </span>
                    )}
                </span>

                <Toggle>
                    <Activator>
                        <i className="fa fa-ellipsis-h" />
                    </Activator>
                    <Content id="activeList" side="left">
                        <Element changeEditMode={this.changeEditMode}> Edit</Element>
                        <Divider />
                        <Element ignore>Move to ...</Element>
                        {listOptions}
                        <Divider />
                        <Element ignore deleteTask={this.deleteTask}>
                            Delete
                        </Element>
                    </Content>
                </Toggle>
            </Todo>
        );
    }

    changeEditMode = () => {
        if (!this.state.editMode) {
        }
        this.setState(prevState => ({
            editMode: !prevState.editMode,
        }));
    };

    listOptions = props => {
        return props.lists
            .filter(listOption => {
                return listOption !== this.state.list;
            })
            .map((listOption, index) => {
                return (
                    <Element key={index} changeList={this.changeList} listOption={listOption}>
                        {' '}
                        {listOption}{' '}
                    </Element>
                );
            });
    };

    changeList = newList => {
        this.props.update({
            id: this.state.id,
            list: newList,
            done: this.state.done,
            task: this.state.task,
        });
    };
    deleteTask = () => {
        this.props.update(
            {
                id: this.state.id,
                list: this.state.list,
                done: this.state.done,
                task: this.state.task,
            },
            true,
        );
    };

    inputHandler = event => {
        if (event.target.value !== this.state.task && event.target.value !== '') {
            this.props.update({
                id: this.state.id,
                list: this.state.list,
                done: this.state.done,
                task: event.target.value,
            });

            this.setState({ task: event.target.value });
        }
        this.changeEditMode();
    };

    checkTask = () => {
        this.setState({ done: this.refs.isDone.checked });

        this.props.update({
            id: this.state.id,
            list: this.state.list,
            done: this.refs.isDone.checked,
            task: this.state.task,
        });
    };
}

export default TodoItem;
