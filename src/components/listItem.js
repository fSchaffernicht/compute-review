import React from 'react'
import { Button } from './index'

const ListItem = props => {
  return (
    <li>
      { props.name }
      <Button onClick={() => props.onRemove(props.name)}>-</Button>
    </li>
  )
}

export default ListItem
