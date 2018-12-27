import React, { Component } from 'react';
import './todo.styles.scss';
import { ListOptions, NewTodo, TodoList } from './components';
// import NewTodo from './components';
// import TodoList from './components';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            activeList: 'today',
            allTodos: [],
            filteredTodos: []
        };
    }

    filterTodos = () => {



        return [];
    }

    render() {
        return (
            <div>
                <ListOptions />
                <TodoList filteredTodos={this.state.filteredTodos} />
                <NewTodo />
            </div>
        );
    }
}

export default Todo;