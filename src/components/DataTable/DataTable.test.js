import React from 'react';
import { mount } from 'enzyme';

import DataTable from './DataTable';
import TableComponent from './TableComponent/TableComponent';
import TableFooter from './TableFooter/TableFooter';

import api from '../../lib/api';

describe('<DataTable />', () => {
  let component;

  beforeEach(() => {
    component = mount(<DataTable diffName="User" apiCall={api.getUsersDiff} />);
  });

  it('should render datatable', () => {
    expect(component.length).toBeTruthy();
  });

  it('should have an initial state', () => {
    expect(component.find(TableFooter).props().loading).toBe(true);
    expect(component.find(TableFooter).props().error).toBe("");
    expect(component.find(TableComponent).props().tableRows).toEqual([]);
  });

  // Would have to include unit tests to mock my custom hook... 
  // Let's assume it's there for this 'homework'...
});
