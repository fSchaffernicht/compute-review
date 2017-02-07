import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { changeInput,addName } from './actions'

// components
import { List, Button, Input, FormInput } from './components'

const App = (props) => {
  return (
    <div className="App">
      <FormInput
        onChange={ event => props.onInputChange(event.target.value) }
        onClick={ () => props.onAddName('value')}/>
      <List>{ props.name }</List>
      {
        props.error &&
        <div>{ props.error }</div>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name : state.inputText.value,
    error: state.inputText.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: (text) => dispatch(changeInput(text)),
    onAddName: (name) => dispatch(addName(name))
  }
}

const StartApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)



export default StartApp;
