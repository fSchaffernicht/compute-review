import React from 'react';
import ReactDOM from 'react-dom';

// test
import { shallow, mount, render } from 'enzyme';

// components
import { List, ListItem } from './';

import { createName } from '../util';

it('should have 2 listitems', () => {
  const items = [
    createName({name: "stefan"}),
    createName({name: "felix"}),
  ]
  const wrapper = mount(
    <List names={items} />
  )

  const list = wrapper.find('ul');
  const listItems = wrapper.find('ListItem');
  expect(list.length).toEqual(1);
  expect(listItems.length).toEqual(2);
});
