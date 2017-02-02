import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { greetings } from './actions';

// components
import { List, Button, Input } from './components'

const App = (props) => {
  return (
    <div className="App">
      <div onClick={ () => props.onGreet('Kartoffel')}>click me</div>
      <List>{ props.name }</List>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    name : state.name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGreet: (text) => dispatch(greetings(text))
  }
}

const StartApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)



export default StartApp;
