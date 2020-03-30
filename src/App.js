import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    boredom: {
      results: [],
      loaded: false
    }
  }

  // componentDidMount() {
  //   this.fetchBored()
  // }

  fetchBored = async (url = 'https://www.boredapi.com/api/activity/') => {
    const response = await fetch(url)
    const rand = await response.json();
    this.setState ({
      boredom: rand,
      loaded: true})
    console.log(this.state.boredom)
    console.log(this.state.boredom.activity)
  }
  

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            Bored?
          </h3>
          <button className="btn" onClick={ () => this.fetchBored()}>Fix it!</button>
          <h4 className="suggestion">{this.state.boredom.activity}</h4>          
      </div>
    )
  }
}


export default App;
