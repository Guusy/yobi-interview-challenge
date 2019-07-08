import React from 'react';
import ProductsPage from './ProductsPage';
import { shallow } from 'enzyme';
import { getDataTestSelector } from '../../utils/testUtils'
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
        spinner: wrapper.find(getDataTestSelector('spinner')),
        message: wrapper.find(getDataTestSelector('message')),
        product: wrapper.find('Connect(Product)'),
        addProductButton: wrapper.find(getDataTestSelector('add-product-button')),
    };
};

describe('ProductsPage', () => {

    describe('when pass products props', () => {
        const { product } = setup({ products: [{ id: 0 }, { id: 1 }] })
        it('render its', () => {
            expect(product).toHaveLength(2);
        })
    })

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

    describe('when pass a message', () => {
        const MessageValue = "a empty message"
        const { message } = setup({ message: { value: MessageValue } })
        it('show it', () => {
            expect(message.text()).toEqual(MessageValue)
        })
    })
    describe('when click on add product button ', () => {
        const { addProductButton, wrapper } = setup()

        beforeAll(() => {
            addProductButton.simulate('click')
        })
        it('open the dialog ', () => {
            const muttedDialog = wrapper.find('AddProductDialog')
            expect(muttedDialog.props().open).toBe(true)
        })
    })
})

