// This scripts main function is to handle searches preformed by the user while receiving props from Search.js

import React, {Component} from 'react';

class SearchField extends Component {

  state = {
  searchText: ''
  }

  //onSearchChange simply shows in state that the input field is receiving proper input
  onSearchChange = e => {
  this.setState({ searchText: e.target.value});
  }

  handleSubmit = e => {
  e.preventDefault();
  this.props.onSearch(this.query.value);
  e.currentTarget.reset();
  }

  render() {
    return(
      <form  
      onSubmit={this.handleSubmit}>
        <input  
        className="searchBox"
        type="search"
        onChange={this.onSearchChange}
        name="search"
        ref={(input) => this.query = input}
        placeholder="Search for your activity..."/>
      </form>
    )
  }
}

export default SearchField