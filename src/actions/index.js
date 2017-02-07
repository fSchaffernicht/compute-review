export const CHANGE_INPUT = 'CHANGE_INPUT'
export const ADD_NAME = 'ADD_NAME'

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
