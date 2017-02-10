import React from 'react'
import { Button, Input } from './index'

const FormInput = props => {

  return (
    <div>
      <Button onClick={props.onClick}></Button>
      <Input onChange={props.onChange} />
    </div>
  )
}

export default FormInput
