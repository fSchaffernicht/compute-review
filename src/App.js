import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { changeInput, addName, removeName, toggleAvailability } from './actions'

// components
import { List, Button, Input, FormInput, ErrorDisplay, Pairs, Link, Header } from './components';
import { generateMailtoLink } from './util';

const App = (props) => {
  return (
    <div className="App">
      <Header title="Code Revie Tool" />

      <ErrorDisplay error={props.error} />
      <FormInput
        onChange={ event => props.onInputChange(event.target.value) }
        onClick={ () => props.onAddName(props.name)}
        name={props.name}
      />
      <List
        names={ props.names }
        onRemove={ (name) => props.onRemoveName(name)}
        onAvailabilityChanged={(name) => props.onAvailabilityChanged(name)}
      />
      <hr/>
      <Pairs pairs={props.pairs} />
      <hr/>
      <Link href={generateMailtoLink({ pairs: props.pairs, })}>Send Mail!</Link>
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
    onAddName: (name) => dispatch(addName(name)),
    onRemoveName: (name) => dispatch(removeName(name)),
    onAvailabilityChanged: (name) => dispatch(toggleAvailability(name))
  }
}

const StartApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)



export default StartApp;
