import React, {Component} from 'react';
import './App.css';
import './Search'
import Search from './Search';

    
class App extends Component {
  
  state = {
    act: {
      results: [],
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
    ],
    btnBckgrnd: {
      bckgrnd: [],
      loaded: false
    },
    specificAct: {
      results: [],
    }
  }

  componentDidMount() {
    this.fetchBackground()
  }

  fetchAny = async (url = 'https://www.boredapi.com/api/activity/') => {
    const response = await fetch(url)
    const rand = await response.json();
    this.setState ({
      act: rand
      })
  }

  fetchBackground = async (url = 'https://picsum.photos/v2/list?limit=100') => {
    const res = await fetch(url)
    const bg = await res.json();
    this.setState ({
      btnBckgrnd: bg,
      loaded: true
    })
    console.log(bg)
  }
  
  fetchSelected = async (type) => {
    const response = await fetch(`http://www.boredapi.com/api/activity?type=${type}`)
    const activityType = await response.json();
    this.setState({
      specificAct: activityType
    })

  }

  render() {
    if (this.state.loaded === true) {
      return (
        <div className="App"
          style={{
          backgroundImage: 'url(' + this.state.btnBckgrnd[37].download_url + ')'               
          }}
            >
            <h2>Bored?</h2>
            <h3>Select an activity below or hit the Random button!</h3>

            <ul>
              {this.state.activityType.map(act => (
                <button 
                  className="btn"
                  key={act.type}
                  
                  onClick={ () => this.fetchSelected(act.type)}
                  >{act.type.charAt(0).toUpperCase() + act.type.slice(1)}
                </button>
              ))}
            </ul>

            <button 
              className="btn" 
              onClick={ () => this.fetchAny()}
              >Random Activity!
            </button>

            <h3 className="suggestion">Random Activity:</h3>
            <h2>{this.state.act.activity}</h2>
            <h3 className="suggestion">Specific Activity:</h3>
            <h2>{this.state.specificAct.activity}</h2>
            <Search />
        </div>
      )
    } else {
      return (null)
    }
  }
}


export default App;
