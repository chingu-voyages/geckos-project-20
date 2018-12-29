import React from 'react';

// is this function being recrated when the component is rerendered

const listOptions = (props) => {


    return props.lists.map((listOption, index) => {

        
        const todoCount = [...props.allTodos].filter((todo)=> todo.list === listOption ).length;
        
        return <li key={index} onClick={() => {
            props.changeList(listOption);
            // console.log('listOption',listOption)
        }}> {listOption} {todoCount} </li>
    })
}



const ListOptions = (props) => {

    const newListHandler = (event) => {
        event.preventDefault();
        props.changeList(newListInput.value);
    }

    let newListInput = null;

    const options = listOptions(props);
    // console.log('Test');
    // console.error('I am being rerendered');
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