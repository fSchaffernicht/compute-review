import React from 'react'
import ListItem from './listItem'

const List = props => {
  return (
    <ul>
      { props.names.map((item, index) => {
        return (<ListItem key={index} person={item} onRemove={props.onRemove} onAvailabilityChanged={props.onAvailabilityChanged}></ListItem>);
      }) }
    </ul>
  )
}

List.propTypes = {
  names: React.PropTypes.arrayOf(React.PropTypes.object),
}


export default List
