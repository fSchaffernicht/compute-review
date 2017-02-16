import React from 'react'
import ListItem from './listItem'

const List = ({names = []}) => {
  return (
    <ul>
      { names.map((item, index) => {
        return (<ListItem key={index} name={item}></ListItem>);
      }) }
    </ul>
  )
}

export default List
