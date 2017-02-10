import teamReducer from './index'
import { changeInput, addName } from '../actions'

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
    inputText: {
      value: '',
      error: ''
    },
    names: [
      'Satan'
    ]
  }

  expect(actual).toEqual(expected)
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

