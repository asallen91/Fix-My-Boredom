// This scripts main objective is to receive props from it's parent script (Search.js) and return the results in a <ul> element when the user preforms a search.

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