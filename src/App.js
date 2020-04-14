import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import Background from './background';

    
class App extends Component {
  
  state = {
    boredom: {
      results: [],
      loaded: false
    },
    activity: {
      results: [],
      loaded: false
    },
    activityType: [
      {
        type: 'Filter by activity type'
      },
      {
        type: 'Busywork',
        isSelected: false
      },
      {
        type: 'Charity',
        isSelected: false
      },
      {
        type: 'Cooking',
        isSelected: false
      },
      {
        type: 'DIY',
        isSelected: false
      },
      {
        type: 'Education',
        isSelected: false
      },
      {
        type: 'Music',
        isSelected: false
      },
      {
        type: 'Recreational',
        isSelected: false
      },
      {
        type: 'Relaxation',
        isSelected: false
      },
      {
        type: 'Social',
        isSelected: false
      } 
    ]
  }

  fetchAny = async (url = 'https://www.boredapi.com/api/activity/') => {
    const response = await fetch(url)
    const rand = await response.json();
    this.setState ({
      boredom: rand,
      loaded: true})
    console.log(this.state.boredom)
    console.log(this.state.boredom.activity)
  }
  
  fetchSelected = async (type) => {
    const response = await fetch(`http://www.boredapi.com/api/activity?type=${type}`)
    const activityType = await response.json();
    this.setState({
      activity: activityType,
      loaded: true
    })
  }

// fetchSelected will pull an activity by type
// Otherwise fetchAny will pull any activity
// Not fully implemented yet, more to come!

  render() {
    return (
      <div className="App">
        {/* <Background /> */}
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Bored?</h3>
          <label>
            <select>
              {this.state.activityType.map(act => (
                <option key={act.type}>{act.type}</option>
              ))}
            </select>
          </label>
          <button className="btn" onClick={ () => this.fetchAny()}>Fix it!</button>
          <h4 className="suggestion">{this.state.boredom.activity}</h4>
      </div>
    )
  }
}


export default App;
