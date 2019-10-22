import React, {Component} from 'react';

import ScreenComponent from './ScreenComponent';
import KeypadComponent from './KeypadComponent';

class Calculator extends Component {

// TODO : 
//  1. Look into more input sanitization - only allow one "."
//  2. Make display look nicer/little bigger
//  3. 

  state = {
    result: ""
  };

  onClickHandler = (buttonClicked) => {
    console.log("Button clicked: 3" + buttonClicked)
    if (buttonClicked === 'C') {
      this.handleClear();
    } else if (buttonClicked === '=') {
      this.handleCalculate();
    } else {
      this.handleInput(buttonClicked);
    }
  }

  handleInput = (input) => {
    this.setState({
      result: this.state.result + input
    });
  }

  handleClear = () => {
    this.setState({
      result: ""
    });
  }

  handleCalculate = () => {
    const sanitizedResult = this.state.result.replace('x', '*');
    this.setState({
      result: eval(sanitizedResult).toString()
    });
  }

  render() {
    return (
      <div className="calculator">
        <ScreenComponent result={this.state.result}/>
        <KeypadComponent onClickHandler={this.onClickHandler}/>
      </div>
    );
  }
}

export default Calculator;
