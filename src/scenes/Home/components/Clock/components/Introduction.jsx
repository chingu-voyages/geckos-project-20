import React from 'react';

function Introduction({ question, handleChange, saveName }) {
    return (
        <div className="introduction">
            <div className="introduction-content">
                <div className="introduction-content__question">{question}</div>
                <div className="introduction-content__input">
                    <input
                        id="introduction-input"
                        type="text"
                        autoComplete="off"
                        onChange={handleChange}
                        onKeyUp={saveName}
                    />
                </div>
            </div>
        </div>
    );
}

export default Introduction;
