import React, { Component } from 'react';
import '../todo.styles.scss'

// is this function being recrated when the component is rerendered

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const listOptions = (props) => {

    return props.lists.map((listOption, index) => {

        let todoCount;
        if (listOption === 'done') {
            todoCount = [...props.allTodos].filter((todo) => todo.done).length;
        } else {
            todoCount = [...props.allTodos]
                .filter((todo) => todo.list === listOption)
                .filter((listTodo) => !listTodo.done).length;
        }

        return <li key={index} onClick={() => {
            props.changeList(listOption);
        }}> {listOption} {todoCount} </li>
    })
}

class ListOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openLists: false,
        };
        this.newListInput = null;
        this.options = listOptions(this.props);
    }

    newListHandler = (event) => {
        event.preventDefault();
        this.props.changeList(this.newListInput.value);
    }

    toggleOpenLists = () => {
        this.setState(prevState => ({
            openLists: !prevState.openLists,
        }))
    }

    render() {
        return (
            <div className="todoFeature__lists">
                <span className="todoFeature__lists__activeList">{this.props.activeList.capitalize()}</span>

                <span className="todoFeature__lists__otherLists" onClick={this.toggleOpenLists}>
                    <i class="fa fa-chevron-down"></i>
                    {
                        this.state.openLists ?
                            <div style={{ position: 'absolute', left: '5px', zIndex: 5, backgroundColor: 'red' }}>
                                <ul id="activeList">
                                    {this.options}
                                </ul>
                                <form autoComplete="off" onSubmit={this.newListHandler}>
                                    <input type="text" name="newList" id="newList" ref={node => this.newListInput = node} />
                                </form>
                            </div> : null
                    }

                </span>

                <span className="todoFeature__lists__options">
                    <i class="fa fa-ellipsis-h"></i>
                </span>
            </div>
        );
    }
}

export default ListOptions;