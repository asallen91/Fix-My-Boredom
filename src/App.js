import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  state = {
    boredom: {
      results: []
    }
  }

  componentDidMount() {
    this.fetchBored()
  }

  fetchBored = async (url = 'https://www.boredapi.com/api/activity/') => {
    const res = await fetch(url)
    const rand = await res.json();
    this.setState ({boredom: rand})
    console.log(this.state.boredom)
  }
  

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            Bored?
          </h3>
          <button className="btn" onClick={ () => this.fetchBored()}>Fix it!</button>
      </div>
    )
  }

}


export default App;
