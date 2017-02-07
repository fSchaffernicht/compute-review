import { CHANGE_INPUT, ADD_NAME } from '../actions'

import { errors } from '../const'

const initialState = {
  inputText: {
    value: '',
    error: ''
  },
  names: [],
}

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      const includesName = state.names.includes(action.payload)
      return {
        ...state,
        inputText: {
          value: action.payload,
          error: includesName ? errors.duplicateName : ''
        },
      }
    }

    case ADD_NAME: {
      const isEmpty = action.payload === ''

      const newNames = [ ...state.names, action.payload ]

      if (isEmpty) {
        return {
          ...state,
          inputText: {
            value: '',
            error: errors.emptyName
          }
        }
      } else {
        return {
          ...state,
          inputText: {
            value: '',
            error: ''
          },
          names: [
            ...state.names,
            action.payload
          ]
        }
      }
    }

    default:
      return state;
  }
}

export default teamReducer;
