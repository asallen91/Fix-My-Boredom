import React from 'react';

const List = props => (  
  <ul>
    <a href={props.url} target='_blank' rel='noopener noreferrer'>{props.title}</a>
  </ul>
)

export default List