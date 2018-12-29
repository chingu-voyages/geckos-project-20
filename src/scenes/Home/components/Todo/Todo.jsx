import React, { Component } from 'react';
import './todo.styles.scss';
import { ListOptions, TodoList } from './components';
import { initializeTodos }  from './repository/todos'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: ['test1', 'test2', 'main', 'today','done'],
            activeList: 'today',
            lastId: 7,
            allTodos: [],
            filteredTodos: []
        };
        this.newTodoInput = null;
    }
    render() {


        return (
            <div>
                <ListOptions changeList={this.changeActiveList} lists={this.state.lists} activeList={this.state.activeList} allTodos={this.state.allTodos} />
                <TodoList filteredTodos={this.state.filteredTodos} update={this.updateTask} lists={this.state.lists} />

                <form autoComplete="off" onSubmit={this.newTodoHandler}>
                    <input type="text" name="newTodo" id="newTodo" ref={node => this.newTodoInput = node} />
                </form>
            </div>
        );
    }
    componentDidMount() {
        this.setState({ allTodos: initializeTodos()})
        this.filterTodos();
    }

    filterTodos = () => {
        // console.log('i am begin called');
        this.setState(prevState => ({
            filteredTodos: [...prevState.allTodos].filter((todo) => todo.list === prevState.activeList),
        }))

    }

    newTodoHandler = (event) => {
        event.preventDefault(); // Let's stop this event.

        let newTodo = event.target[0].value;
        this.setState(prevState => ({
            allTodos: [...prevState.allTodos, {
                id: prevState.lastId + 1,
                list: prevState.activeList,
                done: false,
                task: newTodo
            }],
            lastId: ++prevState.lastId

        }));

        this.filterTodos();
        this.newTodoInput.value = "";

    }

    changeActiveList = (newList) => {


        // If nothing is changed don't change state / don't rerender
        if (this.state.activeList !== newList) {

            
            let listExists = [...this.state.lists].includes(newList);
            
            if(!listExists){
                console.log('This is a new list', newList);
                this.setState( prevState => ({
                    lists: [...prevState.lists, newList]
                }))
            }

            this.setState({
                activeList: newList
            })
            this.filterTodos();
        }

    }

    updateTask = (object, optional) => {
        if (optional) {


            // let index = this.state.allTodos.findIndex((element) => {
            //     return element.id === object.id;
            // })

            // console.log("Ovoj treba da se izbrise", this.object.id)

            this.setState(prevState => ({
                allTodos: [...prevState.allTodos].filter((todo) => {
                    return todo.id !== object.id
                })
            }))
        } else {

            let prevStateAllTodos = [...this.state.allTodos];
            let index = this.state.allTodos.findIndex((element) => {
                return element.id === object.id;
            })

            console.log('Star Object e ', prevStateAllTodos[index])
            prevStateAllTodos[index] = object;
            console.log('index za menjanje e ', index)
            console.log('Nov object e ', prevStateAllTodos[index]);

            this.setState({
                allTodos: prevStateAllTodos
            });
        }
        this.filterTodos();
        console.log('I should update this object : ', object)
    }

   
  
}

export default Todo;