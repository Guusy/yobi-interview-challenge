import React from 'react';
import Product from './Product';
import { shallow } from 'enzyme';
import { getDataTestSelector } from '../../../../utils/testUtils'
const props = {};
const setup = (anotherProps = {}) => {
    const newProps = {
        ...props,
        ...anotherProps,
    };
    const wrapper = shallow(<Product {...newProps} />);

    return {
        wrapper,
        instance: wrapper.instance(),
        name: wrapper.find(getDataTestSelector('name')),
        type: wrapper.find(getDataTestSelector('type')),
        hasBulk: wrapper.find(getDataTestSelector('has-bulk')),
        hasntBulk: wrapper.find(getDataTestSelector('hasnt-bulk')),
        hasRetail: wrapper.find(getDataTestSelector('has-retail')),
        hasntRetail: wrapper.find(getDataTestSelector('hasnt-retail')),
        removeButton: wrapper.find(getDataTestSelector('remove-button')),
    };
};

describe('Product', () => {
    const basicProduct = {
        "name": "OG Kush",
        "descripton": "This is a test description",
        "type": "Indica",
        "hasBulk": false,
        "hasRetail": false,
        "batchNumber": 12,
        "lotId": 10
    }
    describe('basic render', () => {
        const { name, type } = setup(basicProduct)
        it('render the product name', () => {
            expect(name.text()).toEqual(basicProduct.name)
        })
        it('render the product type', () => {
            expect(type.text()).toEqual(basicProduct.type)
        })
    })
    describe('if the product has bulk', () => {
        const productValue = { ...basicProduct };
        productValue.hasBulk = true;
        const { hasBulk } = setup(productValue)
        it('render the icon of bulk', () => {
            expect(hasBulk).toHaveLength(1)
        })
    })
    describe('if the product hasnt bulk', () => {
        const productValue = { ...basicProduct };
        productValue.hasBulk = false;
        const { hasntBulk } = setup(productValue)
        it('render the icon of no bulk', () => {
            expect(hasntBulk).toHaveLength(1)
        })
    })
    describe('if the product has retail', () => {
        const productValue = { ...basicProduct };
        productValue.hasRetail = true;
        const { hasRetail } = setup(productValue)
        it('render the icon of retail ok', () => {
            expect(hasRetail).toHaveLength(1)
        })
    })
    describe('if the product hasnt retail', () => {
        const productValue = { ...basicProduct };
        productValue.hasRetail = false;
        const { hasntRetail } = setup(productValue)
        it('render the icon of no retail', () => {
            expect(hasntRetail).toHaveLength(1)
        })
    })
    describe('when click at remove button', () => {
        const onRemoveProductSpy = jest.fn();
        const { removeButton } = setup({ ...basicProduct, onRemoveProduct: onRemoveProductSpy })
        beforeAll(() => {
            removeButton.simulate('click')
        })
        it('call onRemoveProduct with the id', () => {
            expect(onRemoveProductSpy).toBeCalledWith(basicProduct.lotId)
        })
    })
})

