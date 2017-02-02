import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { greetings } from './actions'; 

const App = (props) => { 
    console.log(props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p onClick={() => props.onGreet("Dominik")} className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> {
          props.name
        }
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
