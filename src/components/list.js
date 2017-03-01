import React from 'react'
import ListItem from './listItem'

const List = props => {
  return (
    <ul>
      { props.names.map((item, index) => {
        return (<ListItem key={index} name={item} onRemove={props.onRemove} onAvailabilityChanged={props.onAvailabilityChanged}></ListItem>);
      }) }
    </ul>
  )
}

export default List
