import React, { useState, useEffect } from 'react';
import './todo.styles.scss';
import { ListOptions, TodoList } from './components';
import { initializeTodos } from './repository/todos';

function Todo() {
    const [activeList, setActiveList] = useState('today');
    let [lastId, setLastId] = useState(2);
    const [allTodos, setAllTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [lists, setLists] = useState(['main', 'today', 'done']);

    //are these 2 the same?
    const [todoChanged, setTodoChanged] = useState(true);
    const [needsToUpdate, setNeedsToUpdate] = useState(false);

    let newTodoInput = null;

    // Initialized Todo's
    useEffect(() => {
        setAllTodos(initializeTodos());
        filterTodos();
    }, []);

    const filterTodos = option => {
        if (option === 'done') {
            setFilteredTodos([...allTodos].filter(todo => todo.done));
        } else {
            setFilteredTodos([...allTodos].filter(todo => todo.list === activeList));
        }
    };

    const newTodoHandler = event => {
        event.preventDefault(); // Let's stop this event.

        let newTodo = newTodoInput.value;
        if (newTodo !== '') {
            setAllTodos([
                ...allTodos,
                {
                    id: lastId + 1,
                    list: activeList,
                    done: false,
                    task: newTodo,
                },
            ]);
            setLastId(++lastId);
            filterTodos();
            newTodoInput.value = '';
        }
    };

    const changeActiveList = newList => {
        if (newList === 'done') {
            filterTodos('done');
        } else {
            // If nothing is changed don't change state / don't rerender
            if (activeList !== newList) {
                let listExists = [...lists].includes(newList);

                if (!listExists) {
                    setLists([...lists, newList]);
                }

                setActiveList(newList);
                filterTodos();
            }
        }
    };

    const updateTask = (object, optional) => {
        if (optional) {
            setAllTodos(
                [...allTodos].filter(todo => {
                    return todo.id !== object.id;
                }),
            );
        } else {
            let prevStateAllTodos = [...allTodos];
            let index = allTodos.findIndex(element => {
                return element.id === object.id;
            });
            prevStateAllTodos[index] = object;
            setAllTodos(prevStateAllTodos);
            setNeedsToUpdate(!needsToUpdate);
        }

        filterTodos();
    };

    return (
        <div className="todoFeature">
            <ListOptions
                changeList={changeActiveList}
                lists={lists}
                activeList={activeList}
                allTodos={allTodos}
                needsToUpdate={todoChanged}
            />
            <TodoList filteredTodos={filteredTodos} update={updateTask} lists={lists} />

            <form autoComplete="off" onSubmit={newTodoHandler}>
                <input
                    className="todoFeature__input"
                    placeholder="New Todo"
                    type="text"
                    name="newTodo"
                    id="newTodo"
                    ref={node => (newTodoInput = node)}
                />
            </form>
        </div>
    );
}

export default Todo;
