import React, { useState, useEffect } from 'react';
import './clock.styles.scss';
import { Introduction, UserGreeting } from './components';

function GreetingControl() {
    const [showSetName, setShowSetName] = useState(false);
    const [greeting, setGreeting] = useState('');
    const [name, setName] = useState(null);
    const [showEditName, setShowEditName] = useState(false);

    const question = 'Hello, what is your name?';
    const date = new Date();

    const saveName = e => {
        let name = this.state.name;
        if (name && e.keyCode === 13) {
            setShowSetName(true);
            setName(name);
            setShowEditName(false);

            localStorage.setItem('name', JSON.stringify(name));
            localStorage.setItem('setName', true);
        }
    };
    const handleChange = e => {
        setName(e.target.value);
    };

    const changeName = () => {
        setShowEditName(true);
    };

    const getGreeting = hours => {
        let timeOfDay = '';
        console.log({ hours });

        if (hours < 13) {
            timeOfDay = 'morning';
        } else if (hours >= 13 && hours < 18) {
            timeOfDay = 'afternoon';
        } else if (hours >= 18) {
            timeOfDay = 'evening';
        }

        setGreeting(`Good ${timeOfDay}`);
    };

    useEffect(() => {
        const name = JSON.parse(localStorage.getItem('name'));
        if (name) {
            setName(name);
            setShowSetName(true);
        }

        getGreeting(date.getHours());
    });

    return showSetName ? (
        <UserGreeting
            date={date}
            greeting={greeting}
            name={name}
            changeName={changeName}
            editName={showEditName}
            handleChange={handleChange}
            saveName={saveName}
        />
    ) : (
        <Introduction question={question} handleChange={handleChange} saveName={saveName} />
    );
}

export default GreetingControl;
