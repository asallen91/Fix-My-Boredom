import React, {Component} from 'react';

class SearchField extends Component {

  state = {
  searchText: ''
  }

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
      // Need some classNames for styling
      <form onSubmit={this.handleSubmit}>
        <input  
        type="search"
        onChange={this.onSearchChange}
        name="search"
        ref={(input) => this.query = input}
        placeholder="Search for your activity..."/>
        <button 
        type="submit"
        >Search</button>
      </form>
    )
  }
}

export default SearchField