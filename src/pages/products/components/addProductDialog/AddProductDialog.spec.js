import React from 'react';
import { shallow } from 'enzyme';
import AddProductDialog from './AddProductDialog';
import { getDataTestSelector } from '../../../../utils/testUtils';

const props = { products: [] };
const setup = (anotherProps = {}) => {
  const newProps = {
    ...props,
    ...anotherProps,
  };
  const wrapper = shallow(<AddProductDialog {...newProps} />);

  return {
    wrapper,
    instance: wrapper.instance(),
    nameInput: wrapper.find(getDataTestSelector('name-add-product')),
    typeInput: wrapper.find(getDataTestSelector('type-add-product')),
    lotIDInput: wrapper.find(getDataTestSelector('lot-id-add-product')),
    hasBulkInput: wrapper.find(getDataTestSelector('has-bulk-add-product')),
    addButton: wrapper.find(getDataTestSelector('button-add-product')),
  };
};

describe('AddProductDialog', () => {
  describe('add product flow', () => {
    const {
      wrapper, nameInput, typeInput, lotIDInput, addButton
    } = setup();
    it('add button is disabled at the start of flow', () => {
      expect(addButton.props().disabled).toBe(true);
    });
    describe('when write a name input', () => {
      const value = 'magic name';
      beforeAll(() => {
        nameInput.simulate('change', { target: { value, id: 'name' } });
      });
      it('pass to the this the value', () => {
        const muttedInput = wrapper.find(getDataTestSelector('name-add-product'));
        expect(muttedInput.props().value).toEqual(value);
      });
    });

    describe('when write a type input', () => {
      const value = 'magic type';
      beforeAll(() => {
        typeInput.simulate('change', { target: { value, id: 'type' } });
      });
      it('pass to the this the value', () => {
        const muttedInput = wrapper.find(getDataTestSelector('type-add-product'));
        expect(muttedInput.props().value).toEqual(value);
      });
    });
    describe('when write a lot id input', () => {
      const value = 20;
      beforeAll(() => {
        lotIDInput.simulate('change', { target: { value, id: 'lotId' } });
      });
      it('pass to the this the value', () => {
        const muttedInput = wrapper.find(getDataTestSelector('lot-id-add-product'));
        expect(muttedInput.props().value).toEqual(value);
      });
    });
  });
});
