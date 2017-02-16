import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { changeInput,addName } from './actions'

// components
import { List, Button, Input, FormInput, ErrorDisplay, Pairs } from './components'


const App = (props) => {
  return (
    <div className="App">
      <ErrorDisplay error={props.error} />
      <FormInput
        onChange={ event => props.onInputChange(event.target.value) }
        onClick={ () => props.onAddName(props.name)}
        name={props.name}
      />
      <List names={ props.names } />
      <hr/>
      <Pairs pairs={props.pairs} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    names : state.names,
    name : state.inputText.value,
    error: state.inputText.error,
    pairs: state.pairs,
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
