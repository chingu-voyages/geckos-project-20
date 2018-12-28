import React, { Component } from 'react';
import './todo.styles.scss';
import { ListOptions, NewTodo, TodoList } from './components';
// import NewTodo from './components';
// import TodoList from './components';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: ['test1', 'test2'],
            activeList: 'today',
            allTodos: [
                {
                    list: 'main',
                    done: false,
                    task: 'get stuff'
                },
                {
                    list: 'today',
                    done: false,
                    task: 'get stuff'
                },
                {
                    list: 'today',
                    done: false,
                    task: 'get stuff'
                },
                {
                    list: 'main',
                    done: false,
                    task: 'get stuff'
                },
            ],
            filteredTodos: []
        };
    }

    filterTodos = () => {

        this.setState({
            filteredTodos: () => {


                return [...this.state.allTodos].filter((todo) => {
                    if (todo.list === this.state.activeList) {
                        return todo;
                    }
                })
            }
        });


        return [];
    }

    newTodoHandler = (event) => {
        event.preventDefault(); // Let's stop this event.

    }
    render() {


        return (
            <div>
                <ListOptions />
                <TodoList filteredTodos={this.state.filteredTodos} />
                {/* <NewTodo /> */}

                <form onSubmit={this.newTodoHandler}>
                    <input type="text" ref="newTodo" name="newTodo" id="newTodo" />
                </form>
            </div>
        );
    }
}

export default Todo;