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

    Axios.get(`https://google-search3.p.rapidapi.com/api/v1/search?get_total=false&country=US&language=lang_en&max_results=10&uule=w%252BCAIQICIbSG91c3RvbixUZXhhcyxVbml0ZWQgU3RhdGVz&hl=us&q=${query}`,
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "Your API key here"
      }
    })
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
      <div>
        <SearchField onSearch={this.searchResults} />
        <SearchList data={this.state.results}/>
      </div>
    )
  }
}

export default Search