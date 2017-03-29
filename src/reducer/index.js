import { CHANGE_INPUT, ADD_NAME, REMOVE_NAME, TOGGLE_AVAILABILITY } from '../actions'
import {
  LOAD,
  // SAVE,
} from 'redux-storage';

import { errors } from '../const';

import { computePairsAvailable } from '../compute';

export const initialState = {
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
      const newNames = action.payload.names ? action.payload.names : [];
      return {
        ...state,
        ...action.payload,
        pairs: computePairsAvailable(newNames)
      };
    }

    // case SAVE: {
    //   console.log('S A V E')
    //     return {
    //       inputText: {
    //         value: '',
    //         error: ''
    //       },
    //       names: state.names,
    //       pairs: [],
    //     };
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

      const newNames = [
        ...state.names,
        {
          name: action.payload,
          notAvailable: false
        }
      ]
      const isDuplicate = state.names.map((item) => item.name).includes(action.payload)

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
        return {
          ...state,
          inputText: {
            value: '',
            error: ''
          },
          names: newNames,
          pairs: computePairsAvailable(newNames),
        }
      }
    }

    case REMOVE_NAME: {
      const newNames = state.names.filter((item, index) => {
            return item.name !== action.payload
          })
      return {
        ...state,
        names: newNames,
        pairs: computePairsAvailable(newNames),
      }
    }

    case TOGGLE_AVAILABILITY: {
      const newNames = state.names.map((item, index) => {
        if(item.name === action.payload) {
          item.notAvailable = !item.notAvailable;
        }
        return item
      })

      return {...state,
        names: newNames,
        pairs: computePairsAvailable(newNames),
      }
    }

    default: {
      console.log("default!")
      return state;
    }
  }
}


export default teamReducer;
