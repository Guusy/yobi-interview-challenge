import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const props = {};
const setup = (anotherProps = {}) => {
  const newProps = {
    ...props,
    ...anotherProps,
  };
  const wrapper = shallow(<App {...newProps} />);

  return {
    wrapper,
    instance: wrapper.instance(),
  };
};

it('smoke test', () => {
  const { wrapper } = setup();

  expect(wrapper.exists()).toBe(true);
});
