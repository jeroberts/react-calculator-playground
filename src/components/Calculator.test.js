import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

describe('Testing Calculator component', () => {

    const wrapper = shallow(<Calculator />)

    test('Test that Calculator component renders', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Test that Calculator._handleInput adds input character to result', () => {
        wrapper.setState({ result: '123' })
        wrapper.instance()._handleInput('+');
    
        expect(wrapper.state('result')).toEqual('123+');
    });

    test('Test that Calculator._handleClear clears result', () => {
        wrapper.setState({result: '12+34'});
        wrapper.instance()._handleClear();

        expect(wrapper.state('result')).toEqual('');
    });

    test('Test that Calculator._handleCalculate calculates result ending in number', () => {
        wrapper.setState({result: '12+34'});
        wrapper.instance()._handleCalculate();

        expect(wrapper.state('result')).toEqual('46');
    });

    test('Test that Calculator._handleCalculate calculates result ending with \'.\'', () => {
        wrapper.setState({result: '12.4+34.'});
        wrapper.instance()._handleCalculate();

        expect(wrapper.state('result')).toEqual('46.4');
    });

    test('Test that Calculator._handleCalculate does nothing given result ends with operand', () => {
        wrapper.setState({result: '12x'});
        wrapper.instance()._handleCalculate();

        expect(wrapper.state('result')).toEqual('12x');
    });

    test('Test that Calculator.onClickHandler clears result given input is \'C\'', () => {
        wrapper.setState({result: '123x234'});
        wrapper.instance().onClickHandler('C');

        expect(wrapper.state('result')).toEqual('');
    });

    test('Test that Calculator.onClickHandler calculates result given input is \'=\'', () => {
        wrapper.setState({result: '3x2'});
        wrapper.instance().onClickHandler('=');

        expect(wrapper.state('result')).toEqual('6');
    });

    test('Test that Calculator.onClickHandler adds \'.\' to result given input is \'.\' and doesn\'t already exist in expresion', () => {
        wrapper.setState({result: '1x2'});
        wrapper.instance().onClickHandler('.');

        expect(wrapper.state('result')).toEqual('1x2.');
    });

    test('Test that Calculator.onClickHandler does not add \'.\' to result given input is \'.\' and expresion already contains a \'.\'', () => {
        wrapper.setState({result: '1x2.'});
        wrapper.instance().onClickHandler('.');

        expect(wrapper.state('result')).toEqual('1x2.');
    });

    test('Test that Calculator.onClickHandler adds the input to result', () => {
        wrapper.setState({result: '1x2'});
        wrapper.instance().onClickHandler('4');

        expect(wrapper.state('result')).toEqual('1x24');
    });
});

