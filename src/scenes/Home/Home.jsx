import React, { Component } from 'react';
import './styles.scss';
import Todo from './components/Todo/Todo';
import Background from './components/Background/Background';
import Weather from './components/Weather/Weather';
import Quote from './components/Quote/Quote';
import Search from './components/Search/Search';
import Focus from './components/Focus/Focus';
import Clock from './components/Clock/Clock';
import Toggle from './components/Toggle';
import {
    Activator,
    Content,
    Divider,
    Element,
} from './components/HomeStyledComponents';

class Home extends Component {
    render() {
        return (
            <div className="main-view">
                <Background />
                <div className="app">
                    <div className="top-row">
                        <div className="top-left">
                            <Search />
                        </div>
                        <div className="top-right">
                            <Weather />
                        </div>
                    </div>
                    <div className="center">
                        <Clock />
                    </div>
                    <div className="center-below">
                        <Focus />
                    </div>
                    <div className="bottom">
                        <Quote />
                    </div>

                    <div className="bottom-right">
                        <Toggle>
                            <Activator>
                                <div id="todo">Todo</div>
                            </Activator>
                            <Content side="above">
                                <Todo />
                            </Content>
                        </Toggle>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
