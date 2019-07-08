import React from 'react';
import SearchTextfield from './SearchTextfield';
import { shallow } from 'enzyme';
import { getDataTestSelector } from '../../../../utils/testUtils'
const props = {};
const textFieldSelector = getDataTestSelector('text-field-product')

const setup = (anotherProps = {}) => {
    const newProps = {
        ...props,
        ...anotherProps,
    };
    const wrapper = shallow(<SearchTextfield {...newProps} />);

    return {
        wrapper,
        instance: wrapper.instance(),
        TextField: wrapper.find(textFieldSelector),
    };
};

describe('SearchTextfield', () => {

    describe('when write in input', () => {
        const { wrapper, TextField } = setup()
        const newValue = "text"
        beforeAll(() => {
            TextField.simulate('change', { target: { value: newValue } })
        })
        it('render the new value', () => {
            const muttedTextfield = wrapper.find(textFieldSelector)
            console.log(wrapper.debug())
            expect(muttedTextfield.props().value).toEqual(newValue)
        })
    })
})

