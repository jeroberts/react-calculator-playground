import React from 'react';
import { shallow } from 'enzyme';
import InputButton from './InputButton';

describe('Testing InputButton component', () => {
   
    const wrapper = shallow(<InputButton />)

    // TODO : Why is snapshot so simple? Look into this...
    test('Test that InputButton component renders', () => {
        expect(wrapper).toMatchSnapshot();
    });
});