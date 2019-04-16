import React from 'react';
import { FaEllipsisH } from 'react-icons/fa';

function UserGreeting(props) {
    const showMore = () => {
        const showMoreNode = document.querySelector('.clock-greeting-more');
        showMoreNode.classList.toggle('active');
    };
    return (
        <div className="center">
            <div className="app-container clock">
                <div className="clock-time">
                    {props.date.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </div>
                <span className="clock-greeting">
                    {props.greeting},{' '}
                    {!props.editName ? (
                        <span className="clock-greeting__name">{props.name}</span>
                    ) : (
                        <input
                            className="clock-greeting__name--editable"
                            value={props.name}
                            onChange={props.handleChange}
                            onKeyUp={props.saveName}
                            type="text"
                        />
                    )}
                    .
                </span>
                <span className="clock-greeting-more" onClick={showMore}>
                    <FaEllipsisH />
                    <div className="dropdown">
                        <ul className="dropdown-list">
                            <li className="displayname-edit">
                                <span onClick={props.changeName}>Edit your name</span>
                            </li>
                        </ul>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default UserGreeting;
