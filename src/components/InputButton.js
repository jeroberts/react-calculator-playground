import React from 'react';

const InputButton = (props) => {
    return (
        <button 
            className={getButtonStyle(props.value)} 
            onClick={() => props.onClickHandler(props.value)}>
            {props.value}
        </button>
    );
}

const getButtonStyle = value => {
    if ("=" === value) {
        return "equals-button";
    }
    return "button";
}

export default InputButton;