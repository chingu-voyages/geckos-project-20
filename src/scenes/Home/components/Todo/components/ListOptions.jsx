import React from 'react';
import '../todo.styles.scss'

// is this function being recrated when the component is rerendered

console.log("This is a log outside the functions that should theoreticall be only run once");
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

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
        <div className="todoFeature__lists">
            <span className="todoFeature__lists__activeList">{props.activeList.capitalize()}</span>
            {/* <ul id="activeList">
                {options}
            </ul> */}
            <span  className="todoFeature__lists__otherLists"> 
            <i class="fa fa-chevron-down"></i>
            </span>


            <span className="todoFeature__lists__options">
            <i class="fa fa-ellipsis-h"></i>
            </span>
            <div>
            {/* <form autoComplete="off" onSubmit={newListHandler}>
                <input type="text" name="newList" id="newList" ref={node => newListInput = node} />
            </form> */}
            </div>
        </div>
    );
}

export default ListOptions;