import teamReducer from './index'
import { changeInput, addName, removeName, toggleAvailability } from '../actions'
import { createName } from '../util';
import { errors } from '../const'

import { initialState } from './index';

const getState = (props = {}) => {
  return {
    ...initialState,
    ...props
  }
}

it('inputText should have value of Satan', () => {
  const state = {
    inputText: {
      value: '',
      error: ''
    },
    names: []
  }

  const actual = teamReducer(state, changeInput('Satan'))
  const expected = {
    inputText: {
      value: 'Satan',
      error: ''
    },
    names: []
  }

  expect(actual).toEqual(expected)
})

it('should add new Name', () => {
  const state = {
    inputText: {
      value: 'Satan',
      error: ''
    },
    names: []
  }

  const actual = teamReducer(state, addName('Satan'))
  const expected = getState({
    names: [
      createName({name: 'Satan'}),
    ]
  })

  expect(actual.names).toEqual(expected.names)
})

it('should clear name after adding it', () => {
  const state = {
    inputText: {
      value: 'Satan',
      error: ''
    },
    names: [],
  }

  const actual = teamReducer(state, addName('Satan'))
  const expected = {
    inputText: {
      value: '',
      error: ''
    },
  }

  expect(actual.inputText).toEqual(expected.inputText)
})

it('text shouldn\'t be empty', () => {
  const state = {
    inputText: {
      value: '',
      error: ''
    },
    names: []
  }

  const actual = teamReducer(state, addName(''))
  const expected = {
    inputText: {
      value: '',
      error: errors.emptyName
    },
    names: []
  }

  expect(actual).toEqual(expected)
})

it('should throw error when user types in input same name', () => {
  const state = {
    inputText: {
      value: '',
      error: ''
    },
    names: [
      'Felix',
      'Dominik',
      'Florian'
    ],
  }

  const actual = teamReducer(state, changeInput('Florian'))
  const expected = {
    inputText: {
      value: 'Florian',
      error: errors.duplicateName
    },
    names: [
      'Felix',
      'Dominik',
      'Florian'
    ],
  }

  expect(actual).toEqual(expected)
})

it('should throw error when trying to add duplicate', () => {
  const state = {
    inputText: {
      value: 'Florian',
      error: ''
    },
    names: [
      createName({name: 'Florian'})
    ],
  }


  const actual = teamReducer(state, addName('Florian'))
  const expected = {
    inputText: {
      value: 'Florian',
      error: errors.duplicateName
    },
    names: [
      createName({name: 'Florian'})
    ],
  }

  expect(actual).toEqual(expected);
})

it('should generate two pairs for two names', () => {
  const state = {
    names: [
      'Felix',
    ],
  }

  const actual = teamReducer(state, addName('Florian'));

  expect(actual.pairs.length).toEqual(2);
})

it('can remove items from list', () => {
  const state = {
    names: [
      createName({name: 'Florian'}),
      createName({name: 'Felix'}),
    ]
  }

  const expected = {
    names: [
      createName({name: 'Florian'})
    ]
  }

  const actual = teamReducer(state, removeName('Felix'));

  expect(actual.names).toEqual(expected.names);
  expect(actual.pairs.length).toEqual(1);
})

it('can not remove empty name from list', () => {
  const state = {
    names: [
      createName({name: 'Florian'}),
      createName({name: 'Felix'}),
    ]
  }

  const actual = teamReducer(state, removeName(''));

  expect(actual.names).toEqual(state.names);
})

it('can not remove null from list', () => {
  const state = {
    names: [
      createName({name: 'Florian'}),
      createName({name: 'Felix'}),
    ]
  }

  const actual = teamReducer(state, removeName(null));

  expect(actual.names).toEqual(state.names);
})

it('if 1 of 4 persons is notAvailable, then the reducer has to build only 3 pairs', () => {
  const state = {
    names: [
      createName({name: 'Florian'}),
      createName({name: 'Felix'}),
      createName({name: 'Dominik'}),
      createName({name: 'Stephan'}),
    ]
  }

  const actual = teamReducer(state, toggleAvailability("Dominik"));

  expect(actual.pairs.length).toEqual(3);
  expect(actual.names.find((item) => { return item.name === "Dominik" }).notAvailable).toEqual(true);
});

it('toggle twice leaves person available', () => {
  const state = {
    names: [
      createName({name: 'Florian'}),
    ]
  }

  const actual = teamReducer(state, toggleAvailability('Florian'));
  const actual2 = teamReducer(actual, toggleAvailability('Florian'));

  expect(actual2.names.find((item) => { return item.name === 'Florian' }).notAvailable).toEqual(false);
});

it('check if pairs are in correct object structure', () => {
  const state = {
    names: [],
  };

  const expectedPairs = [{
    reviewee: createName({name:'Florian'}),
    reviewer: createName({name:'Florian'}),
  }];

  const actual = teamReducer(state, addName('Florian'));

  const actualPairs = actual.pairs;

  expect(actualPairs).toEqual(expectedPairs);
})
