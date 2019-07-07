import React from 'react';
import ProductsPage from './ProductsPage';
import { shallow } from 'enzyme';

const props = {};
const setup = (anotherProps = {}) => {
    const newProps = {
        ...props,
        ...anotherProps,
    };
    const wrapper = shallow(<ProductsPage {...newProps} />);

    return {
        wrapper,
        instance: wrapper.instance(),
        spinner: wrapper.find('[data-test="spinner"]'),
    };
};

describe('ProductsPage', () => {

    describe('when pass isFetching as true', () => {
        const { spinner } = setup({ isFetching: true })
        it('render a spinner', () => {
            expect(spinner).toHaveLength(1);
        })
    });
    describe('when pass isFetching as false', () => {
        const { spinner } = setup({ isFetching: false })
        it('dont render a spinner', () => {
            expect(spinner).toHaveLength(0);
        })
    });
})

