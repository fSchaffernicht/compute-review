import React from 'react'
import { Button } from './index'

const ListItem = props => {
  return (
    <li>
      { props.name }
      <Button onClick={() => props.onRemove(props.name)}>-</Button>
      <Button onClick={() => props.onAvailabilityChanged(props.name)}>toggle availability</Button>
    </li>
  )
}

export default ListItem
