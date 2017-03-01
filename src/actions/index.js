export const CHANGE_INPUT = 'CHANGE_INPUT'
export const ADD_NAME = 'ADD_NAME'
export const REMOVE_NAME = 'REMOVE_NAME'
export const TOGGLE_AVAILABILITY = 'TOGGLE_AVAILABILITY'

export const changeInput = payload => {
  return {
    type: CHANGE_INPUT,
    payload
  }
}

export const addName = payload => {
  return {
    type: ADD_NAME,
    payload
  }
}

export const removeName = payload => {
  return {
    type: REMOVE_NAME,
    payload
  }
}

export const toggleAvailability = payload => {
  return {
    type: TOGGLE_AVAILABILITY,
    payload
  }
}
