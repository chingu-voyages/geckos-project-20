import React from 'react';
import '../todo.styles.scss'

// is this function being recrated when the component is rerendered

console.log("This is a log outside the functions that should theoreticall be only run once");

const listOptions = (props) => {

    console.log("This should be run once on init only , THE OUTSIDE FUNCTION");

    return props.lists.map((listOption, index) => {

        
        let todoCount;

        if (listOption === 'done'){
            todoCount = [...props.allTodos].filter((todo)=> todo.done).length;
        } else {
            todoCount = [...props.allTodos]
            .filter((todo)=> todo.list === listOption)
            .filter((listTodo) => !listTodo.done).length;
        }
        
        return <li key={index} onClick={() => {
            props.changeList(listOption);
        }}> {listOption} {todoCount} </li>
    })
}



const ListOptions = (props) => {
    console.log("ListOptions is rerendering because list is changed for each click");

    const newListHandler = (event) => {
        event.preventDefault();
        props.changeList(newListInput.value);
    }

    let newListInput = null;

    const options = listOptions(props);

    return (
        <div>
            <h5>{props.activeList}</h5>
            <ul id="activeList">
                {options}
            </ul>
            <div>
            <span> + New List </span>
            <form autoComplete="off" onSubmit={newListHandler}>
                <input type="text" name="newList" id="newList" ref={node => newListInput = node} />
            </form>
            </div>
        </div>
    );
}

export default ListOptions;