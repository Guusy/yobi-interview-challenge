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

describe('Component', () => {
    const { wrapper } = setup();
    it('smoke test', () => {
        expect(wrapper.exists()).toBe(true);
    });
})

