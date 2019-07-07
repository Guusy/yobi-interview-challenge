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
        bulk: wrapper.find(getDataTestSelector('bulk')),
        retail: wrapper.find(getDataTestSelector('retail')),
    };
};

describe('Product', () => {
    describe('basic render', () => {
        const productValue = {
            "name": "OG Kush",
            "descripton": "This is a test description",
            "type": "Indica",
            "hasBulk": true,
            "hasRetail": true,
            "batchNumber": 12,
            "lotId": 10
        }
        const { name, type, bulk, retail } = setup(productValue)
        it('render the product name', () => {
            expect(name.text()).toEqual(productValue.name)
        })
    })
})

