import React, { Component } from 'react';
import './styles.scss';
import Todo from './components/Todo/Todo';

class Home extends Component {
    render() {
        return (
            <div className="app">
                <Todo />
            </div>
        );
    }
} 

export default Home;
