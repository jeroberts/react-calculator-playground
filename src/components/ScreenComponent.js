import React from 'react';
import PropTypes from 'prop-types';

const ScreenComponent = (props) => {
    return (
        <div className="screen">
            <p className="screen-p">{props.result}</p>
        </div>
    );
}

ScreenComponent.propTypes = {
    result: PropTypes.string.isRequired
}

export default ScreenComponent;