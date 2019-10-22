import React from 'react';

import InputButton from './InputButton';

const KeypadComponent = (props) => {
    return (
        <div>
            <div className="row">
                <InputButton 
                    value={1} 
                    onClickHandler={props.onClickHandler}/>
                <InputButton 
                    value={2} 
                    onClickHandler={props.onClickHandler}/>
                <InputButton 
                    value={3} 
                    onClickHandler={props.onClickHandler}/>
                <InputButton 
                    value={'+'} 
                    onClickHandler={props.onClickHandler}/>
            </div>
            <div className="row">
                <InputButton 
                    value={4} 
                    onClickHandler={props.onClickHandler}/>
                <InputButton 
                    value={5} 
                    onClickHandler={props.onClickHandler}/>
                <InputButton 
                    value={6} 
                    onClickHandler={props.onClickHandler}/>
                <InputButton 
                    value={'-'} 
                    onClickHandler={props.onClickHandler}/>
            </div>
            <div className="row">
                <InputButton 
                    value={7} 
                    onClickHandler={props.onClickHandler}/>
                <InputButton 
                    value={8} 
                    onClickHandler={props.onClickHandler}/>
                <InputButton 
                    value={9} 
                    onClickHandler={props.onClickHandler}/>
                <InputButton 
                    value={'x'} 
                    onClickHandler={props.onClickHandler}/>
            </div>
            <div className="row">
                <InputButton 
                    value={'C'} 
                    onClickHandler={props.onClickHandler}/>
                <InputButton 
                    value={0} 
                    onClickHandler={props.onClickHandler}/>
                <InputButton 
                    value={'.'} 
                    onClickHandler={props.onClickHandler}/>
                <InputButton 
                    value={'/'} 
                    onClickHandler={props.onClickHandler}/>
            </div>
            <div className="row">
                <InputButton 
                    value={'='} 
                    onClickHandler={props.onClickHandler}/>
            </div>
        </div>
    );
}

export default KeypadComponent;