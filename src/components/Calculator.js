import React, {Component} from 'react';

import ScreenComponent from './ScreenComponent';
import KeypadComponent from './KeypadComponent';

class Calculator extends Component {

  bill = 'bill';

  state = {
    result: ""
  };

  onClickHandler = (buttonClicked) => {
    if (buttonClicked === 'C') {
      this._handleClear();
    } else if (buttonClicked === '=') {
      this._handleCalculate();
    } else if (buttonClicked === '.' ) {
      // Ensure that decimal numbers stay valid with only one decimal point
      const splitResult = this.state.result.split(/\+|-|x|\//);
      if (splitResult[splitResult.length - 1].indexOf('.') === -1) {
        this._handleInput(buttonClicked);
      }
    } else {
      this._handleInput(buttonClicked);
    }
  }

  _handleInput = (input) => {
    this.setState({
      result: this.state.result + input
    });
  }

  _handleClear = () => {
    this.setState({
      result: ""
    });
  }

  _handleCalculate = () => {
    const lastCharacterOfExpression = this.state.result.slice(-1);
    const expressionEndsWithNumber = !isNaN(lastCharacterOfExpression);
    const experssionEndsWithPeriod = lastCharacterOfExpression === '.';

    if (expressionEndsWithNumber || experssionEndsWithPeriod) {
      // Change all 'x' into '*' so that expression is valid
      const validExpression = this.state.result.replace(/x/g, '*');

      this.setState({
        result: eval(validExpression).toString()
      });
    }
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
