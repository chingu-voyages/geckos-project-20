import React, { useState, useEffect } from 'react';
import { GoPlus } from 'react-icons/go';
import { GoX } from 'react-icons/go';
import { FaRegCheckSquare } from 'react-icons/fa';
import { FaRegSquare } from 'react-icons/fa';
import { FaCircleNotch } from 'react-icons/fa'; //Loading Icon
import './styles.scss';

function Focus() {
    const [focus, setFocus] = useState('');
    const [input, setInput] = useState('');
    const [line, setLine] = useState('none');
    const [isChecked, setIsChecked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const onChange = e => {
        setInput(e.target.value);
    };
    const toggleLine = e => {
        if (line === 'none') {
            setLine('line-through');
        } else {
            setLine('none');
        }
        setIsChecked(!isChecked);
    };
    const onCompleteClick = () => {
        localStorage.removeItem('focus');
        setFocus('');
        setLine('none');
        setIsChecked(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const onSubmit = e => {
        e.preventDefault();
        localStorage.setItem('focus', input);
        setInput('');
        setFocus(input);
    };

    useEffect(() => {
        let focus = localStorage.getItem('focus');
        if (focus) {
            setFocus(focus);
        }
    }, []);

    let checkIcon;
    let clearPlusIcon;
    let control;

    if (isHovered) {
        control = { opacity: '1' };
    } else {
        control = { opacity: '0' };
    }
    checkIcon = isChecked ? (
        <FaRegCheckSquare className="control focus-icon-checkbox" onClick={e => this.toggleLine(e)} style={control} />
    ) : (
        <FaRegSquare className="control focus-icon-checkbox-empty" onClick={e => this.toggleLine(e)} style={control} />
    );
    clearPlusIcon = isChecked ? (
        <GoPlus className="control focus-icon-plus" onClick={onCompleteClick} style={control} />
    ) : (
        <GoX className="control focus-icon-clear" onClick={onCompleteClick} style={control} />
    );

    return (
        <div className="focus-wrapper focuses">
            {focus ? (
                <React.Fragment>
                    <div className="focus-complete">
                        <h4 className="focus-title">TODAY</h4>

                        <div className="focus-row" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div>
                                <div className="focus-content">
                                    {checkIcon}
                                    <h3 className="focus-todays-focus" style={{ textDecoration: line }}>
                                        {focus}
                                    </h3>
                                    {clearPlusIcon}
                                </div>

                                {isChecked && (
                                    <div className="focus-message">
                                        <FaCircleNotch className="focus-icon-spin" />
                                        Way to go!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div>
                        <h3 className="focus-prompt-title">What is your main focus for today?</h3>
                        <form onSubmit={e => onSubmit(e)}>
                            <input className="focus-prompt" type="text" onChange={e => onChange(e)} />
                        </form>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

export default Focus;
