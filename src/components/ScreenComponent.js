import React from 'react';

const ScreenComponent = (props) => {
    return (
        <div className="screen" >
            <span>{props.result}</span>
        </div>
    );
}

export default ScreenComponent;