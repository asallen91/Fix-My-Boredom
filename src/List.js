import React from 'react';

const List = props => (  
  <ul>
    <button className="btn"><a href={props.url} target='_blank' rel='noopener noreferrer'>{props.title.slice(0, 34) + '...'}</a></button>
  </ul>
)

export default List