import React from 'react'
import { Button, Input, Li } from './index'

const FormInput = props => {

  const handleKeyPress = (key,e) => {
      if (key.key.toLowerCase() == "enter")
      {
        props.onClick()
      }
    }

  return (
    <Li>
      <Button onClick={props.onClick}>Add</Button>
      <Input onChange={props.onChange} value={props.name} onKeyPress={handleKeyPress} />
    </Li>
  )
}

export default FormInput
