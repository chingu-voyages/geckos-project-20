import React, { Component } from 'react';
import './todo.styles.scss';
import { ListOptions, NewTodo, TodoList } from './components';
// import NewTodo from './components';
// import TodoList from './components';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: ['test1', 'test2', 'main', 'today'],
            activeList: 'today',
            allTodos: [
                {
                    list: 'main',
                    done: false,
                    task: '1'
                },
                {
                    list: 'today',
                    done: false,
                    task: '2'
                },
                {
                    list: 'today',
                    done: false,
                    task: '3'
                },
                {
                    list: 'main',
                    done: false,
                    task: '4'
                },
            ],
            filteredTodos: []
        };
    }

    filterTodos = () => {
        console.log('i am begin called');
        this.setState(prevState => ({
            filteredTodos: [...prevState.allTodos].filter((todo) => todo.list === prevState.activeList),
        }))

    }

    newTodoHandler = (event) => {
        event.preventDefault(); // Let's stop this event.

    }

    componentDidMount() {
        this.filterTodos();
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