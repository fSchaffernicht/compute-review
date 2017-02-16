import React from 'react'
import { Button, Input } from './index'

const FormInput = props => {

  return (
    <div>
      <Button onClick={props.onClick}>Add</Button>
      <Input onChange={props.onChange} value={props.name} />
    </div>
  )
}

export default FormInput
