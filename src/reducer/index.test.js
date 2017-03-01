import teamReducer from './index'
import { changeInput, addName, removeName } from '../actions'

import { errors } from '../const'

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
  const expected = {
    names: [
      'Satan'
    ]
  }

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
      'Florian'
    ],
  }


  const actual = teamReducer(state, addName('Florian'))
  const expected = {
    inputText: {
      value: 'Florian',
      error: errors.duplicateName
    },
    names: [
      'Florian'
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
      "Florian",
      "Felix",
    ]
  }

  const expected = {
    names: [
      "Florian",
    ]
  }

  const actual = teamReducer(state, removeName('Felix'));

  expect(actual.names).toEqual(expected.names);
  expect(actual.pairs.length).toEqual(1);
})

it('can not remove empty name from list', () => {
  const state = {
    names: [
      "Florian",
      "Felix",
    ]
  }

  const actual = teamReducer(state, removeName(''));

  expect(actual.names).toEqual(state.names);
})

it('can not remove null from list', () => {
  const state = {
    names: [
      "Florian",
      "Felix",
    ]
  }

  const actual = teamReducer(state, removeName(null));

  expect(actual.names).toEqual(state.names);
})
