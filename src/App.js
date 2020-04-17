import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './background';

    
class App extends Component {
  
  state = {
    act: {
      results: [],
      loaded: false
    },
    specificAct: {
      results: [],
      loaded: false
    },
    activityType: [
      {type: 'busywork'},
      {type: 'charity'},
      {type: 'cooking'},
      {type: 'diy'},
      {type: 'education'},
      {type: 'music'},
      {type: 'recreational'},
      {type: 'relaxation'},
      {type: 'social'} 
    ]
  }

  fetchAny = async (url = 'https://www.boredapi.com/api/activity/') => {
    const response = await fetch(url)
    const rand = await response.json();
    this.setState ({
      loaded: true,
      act: rand
      })
    console.log(this.state.act)
    console.log(this.state.act.activity)
  }
  
  fetchSelected = async (type) => {
    const response = await fetch(`http://www.boredapi.com/api/activity?type=${type}`)
    const activityType = await response.json();
    this.setState({
      loaded: true,
      specificAct: activityType
    })

  }

  render() {
    return (
      <div className="App">
        <Background />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bored?</h2>
          <h3>Select an activity below or hit the Random button!</h3>

          <ul>
            {this.state.activityType.map(act => (
              <button 
                className="btn"
                key={act.type}
                onClick={ () => this.fetchSelected(act.type)}
                >{act.type.charAt(0).toUpperCase() + act.type.slice(1)}!
              </button>
            ))}
          </ul>

          <button 
            className="btn" 
            onClick={ () => this.fetchAny()}
            >Random Activity!
          </button>

          <h3 className="suggestion">Random Activity: {this.state.act.activity}</h3>
          <h3 className="suggestion">Specific Activity: {this.state.specificAct.activity}</h3>
      </div>
    )
  }
}


export default App;
