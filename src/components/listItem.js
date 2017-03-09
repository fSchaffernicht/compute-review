import React from 'react'
import { Button, Li } from './index'

const ListItem = (props) => {
  const {
    person,
    onRemove,
    onAvailabilityChanged,
  } = props;

  return (
    <Li>
      <span style={{ color: person.notAvailable ? 'lightgrey' : 'black' }}>
        { person.name }
      </span>
      <Button onClick={() => onRemove(person.name)}>-</Button>
      <Button onClick={() => onAvailabilityChanged(person.name)}>toggle availability</Button>
    </Li>
  )
}

export default ListItem
