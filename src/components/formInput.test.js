import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { connect } from 'react-redux';
import { createStore } from 'redux';
import teamReducer from '../reducer';
import { changeInput,addName } from '../actions'

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
    <Button>Add</Button>,
    <Input />,
  ])).toBe(true);
});

it('input displays value from prop', () => {
  const App = <FormInput
          name={"Hans"}
        />

  let wrapper = mount(App);

  let input = wrapper.find('input');

  expect(input.length).toBe(1);
  expect(input.props().value).toBe("Hans");
});
