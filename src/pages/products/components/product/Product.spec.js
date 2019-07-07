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
        retail: wrapper.find(getDataTestSelector('retail')),
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
})

