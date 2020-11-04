import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { findByTestAttr } from '../test/testUtils';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('render()', () => {
    it('renders the Box', () => {
      const component = findByTestAttr(wrapper, 'app-box');
      expect(component.length).toBeTruthy();
    });

    it('should render two diff tables', () => {
      const component = findByTestAttr(wrapper, 'datatable');
      expect(component.length).toBe(2);
    });
  });
});
