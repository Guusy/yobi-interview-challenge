import React from 'react';
import { shallow } from 'enzyme';
import SearchTextfield from './SearchTextfield';
import { getDataTestSelector } from '../../../../utils/testUtils';

const props = {};
const textFieldSelector = getDataTestSelector('text-field-product');

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
  describe('when pass value', () => {
    const aValue = 'hello';
    const { TextField } = setup({ value: aValue });
    it('pass to the textfield', () => {
      expect(TextField.props().value).toEqual(aValue);
    });
  });
  describe('when write in input', () => {
    const onChangeSpy = jest.fn();
    const { TextField } = setup({ onChange: onChangeSpy });
    const newValue = 'text';
    beforeAll(() => {
      TextField.simulate('change', { target: { value: newValue } });
    });
    it('call onChange prop with the value', () => {
      expect(onChangeSpy).toBeCalledWith(newValue);
    });
  });
});
