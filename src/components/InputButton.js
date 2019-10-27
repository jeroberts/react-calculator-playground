import React from 'react';
import PropTypes from 'prop-types';

const InputButton = (props) => {
    return (
        <button 
            className={_getButtonStyle(props.value)} 
            onClick={() => props.onClickHandler(props.value)}>
            {props.value}
        </button>
    );
}

const _getButtonStyle = value => {
    if (value === '=') {
        return "equals-button";
    }
    return "button";
}

InputButton.propTypes = {
    value: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired
}

export default InputButton;