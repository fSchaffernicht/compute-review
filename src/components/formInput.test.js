import React from 'react';
import ReactDOM from 'react-dom';

// test
import { shallow, mount, render } from 'enzyme';

// components
import { FormInput, Button, Input } from './';

it('FormInput without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormInput />, div);
});

it('renders Button and Input', () => {
  const wrapper = shallow(<FormInput />)

  expect(wrapper.containsAllMatchingElements([
    <Button></Button>,
    <Input />,
  ])).toBe(true);
});
