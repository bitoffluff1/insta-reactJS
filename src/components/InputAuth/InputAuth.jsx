import './InputAuth.scss';

import React from 'react';

export function InputAuth(props) {
    const { className, name, value, handleTextChange, label } = props;

    return (
        <div className="col-3 input-effect">
            <input
                className={className}
                type='text'
                name={name}
                value={value}
                onChange={handleTextChange}
            />
            <label>{label}</label>
            <span className="focus-border" />
        </div>
    )
}
