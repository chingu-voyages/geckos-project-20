import React from 'react';
import TodoItem from './TodoItem';
import '../todo.styles.scss'

const todoFilteredList = (props) => {
    return props.filteredTodos.map((todo) => {
        return <TodoItem 
            key={todo.id} 
            todo={todo} 
            update={props.update} 
            lists={props.lists}>
        </TodoItem>
    })
}

const TodoList = (props) => {

    const selectedListTodos = todoFilteredList(props);
    // console.log('TodoList props: ', props);
    return (
        <div className="todoFeature__todoList">
            {selectedListTodos}
        </div>
    );
}

export default TodoList;