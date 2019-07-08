import React from 'react';
import { shallow } from 'enzyme';
import SelectSort from './SelectSort';
import { getDataTestSelector } from '../../../../utils/testUtils';

const props = {};
const selectSelector = getDataTestSelector('select-sort');
const setup = (anotherProps = {}) => {
  const newProps = {
    ...props,
    ...anotherProps,
  };
  const wrapper = shallow(<SelectSort {...newProps} />);

  return {
    wrapper,
    instance: wrapper.instance(),
    select: wrapper.find(selectSelector)
  };
};

describe('SelectSort', () => {
  describe('when select a sort', () => {
    describe('and the sort is asc', () => {
      const selectedSort = 'asc';
      const onSortAscSpy = jest.fn();
      const { wrapper, select } = setup({ onSortAsc: onSortAscSpy });
      beforeAll(() => {
        select.simulate('change', { target: { value: selectedSort } });
      });
      it('pass to the select the asc value', () => {
        const muttedSelect = wrapper.find(selectSelector);
        expect(muttedSelect.props().value).toEqual(selectedSort);
      });
      it('called onSortAsc', () => {
        expect(onSortAscSpy).toBeCalled();
      });
    });
    describe('and the sort is desc', () => {
      const selectedSort = 'desc';
      const onSortDescSpy = jest.fn();
      const { wrapper, select } = setup({ onSortDesc: onSortDescSpy });
      beforeAll(() => {
        select.simulate('change', { target: { value: selectedSort } });
      });
      it('pass to the select the desc value', () => {
        const muttedSelect = wrapper.find(selectSelector);
        expect(muttedSelect.props().value).toEqual(selectedSort);
      });
      it('called onSortDesc', () => {
        expect(onSortDescSpy).toBeCalled();
      });
    });
  });
});
