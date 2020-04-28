// import axios from 'axios';
import React, {Component} from 'react';

class Search extends Component {

  state = {
    results: []
  }

  componentDidMount() {
    this.searchResults()
  }
  searchResults = async () => {

    const response = await fetch("https://google-search3.p.rapidapi.com/api/v1/search?get_total=false&country=US&language=lang_en&max_results=10&uule=w%252BCAIQICIbSG91c3RvbixUZXhhcyxVbml0ZWQgU3RhdGVz&hl=us&q=Yoga",
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "your key here"
      }
    })
    const results = await response.json()
    .then(results => {
      console.log(results);
    })
    .catch(err => {
      console.log(err);
    })
    this.setState({
      results: results
  })
  console.log(results)
}

  render() {
    return(
      <div>
      {/* add value={} */}
        <input type="text" placeholder="Search for your activity..." ></input>
      </div>
    )
  }

}

export default Search