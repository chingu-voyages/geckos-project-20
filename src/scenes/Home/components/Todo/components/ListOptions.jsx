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

    const options = listOptions(props);
    // console.log('Test');
    // console.error('I am being rerendered');
    return (


        <div>
            <h5>{props.activeList}</h5>
            <ul id="activeList">
                {options}
            </ul>
        </div>
    );
}

export default ListOptions;