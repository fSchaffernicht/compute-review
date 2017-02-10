import React from 'react'
import ListItem from './listitem'

const List = props => {
  return (
    <ul>
      { props.names.map((item, index) => {
        return (<ListItem key={index} name={item}></ListItem>);
      }) }
    </ul>
  )
}

export default List
