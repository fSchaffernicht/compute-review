import React from 'react'
import { Button } from './index'

const ListItem = (props) => {
  const {
    person,
    onRemove,
    onAvailabilityChanged,
  } = props;

  return (
    <li>
      <span style={{ color: person.notAvailable ? 'lightgrey' : 'black' }}>
        { person.name }
      </span>
      <Button onClick={() => onRemove(person.name)}>-</Button>
      <Button onClick={() => onAvailabilityChanged(person.name)}>toggle availability</Button>
    </li>
  )
}

export default ListItem
