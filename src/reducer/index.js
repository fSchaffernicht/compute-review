import { CHANGE_INPUT, ADD_NAME } from '../actions'
    import { LOAD, SAVE } from 'redux-storage';

import { errors } from '../const'

import {computeReview} from '../compute';

const initialState = {
  inputText: {
    value: '',
    error: ''
  },
  names: [],
  pairs: [],
}

const teamReducer = (state = initialState, action) => {
  switch (action.type) {


    case LOAD: {
        return action.payload;
      }

    // case SAVE: {
    //     return state;
    //   }


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
      const isDuplicate = state.names.includes(action.payload)

      if (isEmpty) {
        return {
          ...state,
          inputText: {
            value: '',
            error: errors.emptyName
          }
        }
      }
      else if (isDuplicate) {
        return {
          ...state,
          inputText: {
            ...state.inputText,
            error: errors.duplicateName
          }
        }
      }
      else {
        const newNames = [
          ...state.names,
          action.payload
        ]
        return {
          ...state,
          inputText: {
            value: '',
            error: ''
          },
          names: newNames,
          pairs: computeReview(newNames),
        }
      }
    }

    default: {
      console.log("default!")
      return state;
    }
  }
}

export default teamReducer;
