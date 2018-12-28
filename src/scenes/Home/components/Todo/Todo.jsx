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
                list: prevState.activeList,
                done: false,
                task: newTodo
            }],
            lastId : ++prevState.lastId
        
        }));

        this.filterTodos();

    }

    changeActiveList = (newList) => {

            // If nothing is changed don't change state / don't rerender
            if (this.state.activeList !== newList){
                this.setState({
                    activeList: newList 
                })
            this.filterTodos();
        }
      
    }

    updateTask = (object) =>{

        let prevStateAllTodos = [...this.state.allTodos];
        let index =  [...this.state.allTodos].findIndex((element)=>{
                    return element.id === object.id;
                })
        prevStateAllTodos[index] = object;       
        console.log('index za menjanje e ', index)




        this.setState({
            allTodos: prevStateAllTodos
        })
        console.log('I should update this object : ', object)
    }

    componentDidMount() {
        this.filterTodos();
    }
    render() {


        return (
            <div>
                <ListOptions changeList={this.changeActiveList} lists={this.state.lists} activeList={this.state.activeList}/>
                <TodoList filteredTodos={this.state.filteredTodos} update={this.updateTask} />

                <form onSubmit={this.newTodoHandler}>
                    <input type="text" name="newTodo" id="newTodo" />
                </form>
            </div>
        );
    }
}

export default Todo;