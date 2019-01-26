import React, { Component } from 'react';
import Quote from './components/Quote';
import Clock from './components/Clock';
import './styles.scss';
import Weather from './components/Weather/Weather';
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

export default Home