import React from 'react'
import { Button, Input } from './index'

const FormInput = props => {

  const handleKeyPress = (key,e) => {
      if (key.key.toLowerCase() == "enter")
      {
        props.onClick()
      }
    }

  return (
    <div>
      <Button onClick={props.onClick}>Add</Button>
      <Input onChange={props.onChange} value={props.name} onKeyPress={handleKeyPress} />
    </div>
  )
}

export default FormInput
