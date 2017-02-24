import React from 'react';

export default ({pairs = []}) => {
  return <div>
    <h2>Pairs:</h2>
    <ul>
      {pairs.map((pair, index) => <li key={"kungfu" + index}>{pair.reviewer} -> {pair.reviewee}</li>)}
    </ul>
  </div>
}
