import React from 'react';

export default ({pairs = []}) => {
  return <div>
    <h2>Pairs:</h2>
    <ul>
      {pairs.map(pair => <li>{pair.reviewer} -> {pair.reviewee}</li>)}
    </ul>
  </div>
}
