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
            lastId: 7,
            allTodos: [
                {
                    id: 0,
                    list: 'today',
                    done: true,
                    task: '0'
                },
                {
                    id: 1,
                    list: 'main',
                    done: false,
                    task: '1'
                },
                {
                    id: 2,
                    list: 'today',
                    done: false,
                    task: '2'
                },
                {
                    id: 3,
                    list: 'test1',
                    done: false,
                    task: '3'
                },
                {
                    id: 4,
                    list: 'test2',
                    done: true,
                    task: '4'
                },
                {
                    id: 5,
                    list: 'test1',
                    done: true,
                    task: '5'
                },
                {
                    id: 6,
                    list: 'main',
                    done: true,
                    task: '6'
                },
                {
                    id: 7,
                    list: 'today',
                    done: true,
                    task: '7'
                }
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

        let newTodo = event.target[0].value;
        this.setState( prevState => ({
            allTodos: [...prevState.allTodos,{
                id: prevState.lastId + 1,
                list: 'today',
                done: false,
                task: newTodo
            }],
            lastId : ++prevState.lastId
        
        }));

        this.filterTodos();

    }

    changeActiveList = () => {
        this.setState({activeList: 'main'})
        this.filterTodos();
    }

    componentDidMount() {
        this.filterTodos();
    }
    render() {


        return (
            <div>
                <ListOptions />
                <button onClick={this.changeActiveList}>Change List </button>
                <TodoList filteredTodos={this.state.filteredTodos} />
                {/* <NewTodo /> */}

                <form onSubmit={this.newTodoHandler}>
                    <input type="text" name="newTodo" id="newTodo" />
                </form>
            </div>
        );
    }
}

export default Todo;