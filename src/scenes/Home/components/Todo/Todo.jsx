import React, { Component } from 'react';
import './todo.styles.scss';
import { ListOptions, TodoList } from './components';
import { initializeTodos } from './repository/todos';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: ['main', 'today', 'done'],
            activeList: 'today',
            lastId: 2,
            allTodos: [],
            filteredTodos: [],
            todoChanged: true,
        };
        this.newTodoInput = null;
    }
    render() {
        return (
            <div className="todoFeature">
                <ListOptions
                    changeList={this.changeActiveList}
                    lists={this.state.lists}
                    activeList={this.state.activeList}
                    allTodos={this.state.allTodos}
                    needsToUpdate={this.state.todoChanged}
                />
                <TodoList filteredTodos={this.state.filteredTodos} update={this.updateTask} lists={this.state.lists} />

                <form autoComplete="off" onSubmit={this.newTodoHandler}>
                    <input
                        className="todoFeature__input"
                        placeholder="New Todo"
                        type="text"
                        name="newTodo"
                        id="newTodo"
                        ref={node => (this.newTodoInput = node)}
                    />
                </form>
            </div>
        );
    }
    componentDidMount() {
        this.setState({ allTodos: initializeTodos() });
        this.filterTodos();
    }

    filterTodos = option => {
        if (option === 'done') {
            this.setState(prevState => ({
                filteredTodos: [...prevState.allTodos].filter(todo => todo.done),
            }));
        } else {
            this.setState(prevState => ({
                filteredTodos: [...prevState.allTodos].filter(todo => todo.list === prevState.activeList),
            }));
        }
    };

    newTodoHandler = event => {
        event.preventDefault(); // Let's stop this event.

        let newTodo = this.newTodoInput.value;
        if (newTodo !== '') {
            this.setState(prevState => ({
                allTodos: [
                    ...prevState.allTodos,
                    {
                        id: prevState.lastId + 1,
                        list: prevState.activeList,
                        done: false,
                        task: newTodo,
                    },
                ],
                lastId: ++prevState.lastId,
            }));

            this.filterTodos();
            this.newTodoInput.value = '';
        }
    };

    changeActiveList = newList => {
        if (newList === 'done') {
            this.filterTodos('done');
        } else {
            // If nothing is changed don't change state / don't rerender
            if (this.state.activeList !== newList) {
                let listExists = [...this.state.lists].includes(newList);

                if (!listExists) {
                    this.setState(prevState => ({
                        lists: [...prevState.lists, newList],
                    }));
                }

                this.setState({
                    activeList: newList,
                });
                this.filterTodos();
            }
        }
    };

    updateTask = (object, optional) => {
        if (optional) {
            this.setState(prevState => ({
                allTodos: [...prevState.allTodos].filter(todo => {
                    return todo.id !== object.id;
                }),
            }));
        } else {
            let prevStateAllTodos = [...this.state.allTodos];
            let index = this.state.allTodos.findIndex(element => {
                return element.id === object.id;
            });
            prevStateAllTodos[index] = object;
            this.setState({
                allTodos: prevStateAllTodos,
                needsToUpdate: !this.state.needsToUpdate,
            });
        }

        this.filterTodos();
    };
}

export default Todo;
