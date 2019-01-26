import React, { Component } from 'react';
import Toggle from '../../Toggle';
import '../todo.styles.scss';
import {
    Activator,
    Content,
    Divider,
    Element,
} from '../../HomeStyledComponents';

// is this function being recrated when the component is rerendered

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

const listOptions = props => {
    return props.lists.map((listOption, index) => {
        let todoCount;
        if (listOption === 'done') {
            todoCount = [...props.allTodos].filter(todo => todo.done).length;
        } else {
            todoCount = [...props.allTodos]
                .filter(todo => todo.list === listOption)
                .filter(listTodo => !listTodo.done).length;
        }

        return (
            <Element
                key={index}
                listOption={listOption}
                changeList={props.changeList}
            >
                {listOption} {todoCount}
            </Element>
        );
    });
};

class ListOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openLists: false,
        };
        this.newListInput = null;
        this.options = listOptions(this.props);
    }

    newListHandler = event => {
        event.preventDefault();
        this.props.changeList(this.newListInput.value);
    };

    toggleOpenLists = () => {
        this.setState(prevState => ({
            openLists: !prevState.openLists,
        }));
    };

    render() {
        return (
            <div className="todoFeature__lists">
                <span className="todoFeature__lists__activeList">
                    {this.props.activeList.capitalize()}
                </span>

                <Toggle>
                    <Activator>
                        <i className="fa fa-chevron-down" />
                    </Activator>

                    {/* Add ignore prop in ToggleContent Element if you want it
                        to not close when clicking on them
                    */}
                    <Content id="activeList" width="220px" side="below">
                        {this.options}
                        <Divider />
                        <Element ignore>
                            <form
                                autoComplete="off"
                                onSubmit={this.newListHandler}
                            >
                                <input
                                    placeholder=" + New List"
                                    autoFocus={true}
                                    type="text"
                                    name="newList"
                                    id="newList"
                                    ref={node => (this.newListInput = node)}
                                />
                            </form>
                        </Element>
                    </Content>
                </Toggle>

                <span className="todoFeature__lists__options">
                    <i className="fa fa-ellipsis-h" />
                </span>
            </div>
        );
    }
}

export default ListOptions;
