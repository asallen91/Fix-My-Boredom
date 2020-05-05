import React from 'react';
import List from './List'

const SearchList = props => {
  const results = props.data;
  let links;
    if (results.length > 0) {
      links = results.slice(0, 10).map(link =>
        <List url={link.link} key={link.title} title={link.title}/>
    );
  }

  return(
    <ul className="searchResults">{links}</ul>
  );
}

export default SearchList;