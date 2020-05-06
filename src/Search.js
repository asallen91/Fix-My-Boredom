// This scripts main objective is to handle the API pull, set the results to state and then pass props down to its child scripts, SearchField.js, SearchList.js and List.js

import React, {Component} from 'react';
import Axios from 'axios';
import SearchField from './SearchField';
import SearchList from './SearchList';

class Search extends Component {

  state = {
    results: [],
    loaded: false
  }

  searchResults = (query = '') => {
      // This pulls the api, but uses a parameter to accept what the user types in the search field instead of a pre-set search
    Axios.get(`https://google-search3.p.rapidapi.com/api/v1/search?get_total=false&country=US&language=lang_en&max_results=10&uule=w%252BCAIQICIbSG91c3RvbixUZXhhcyxVbml0ZWQgU3RhdGVz&hl=us&q=${query}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "Your API Key here :)" // Your API key here!
      }
    }) // API is set to state and logs the results in the console
    .then(response => {      
      this.setState({
        results: response.data.results,
        loaded: true
      })
      console.log(response)
    })
  }

  render() {
    return(
      <div className="searchWrapper">
        <SearchField onSearch={this.searchResults} />
        <SearchList data={this.state.results}/>
      </div>
    )
  }
}

export default Search
