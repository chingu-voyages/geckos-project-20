import React from 'react';
import './home.styles.scss';

import { Todo, Background, Weather, Quote, Search, Focus, Clock, Toggle } from './components';
import { Activator, Content } from './components/home.scmp';

function Home() {
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

export default Home;
