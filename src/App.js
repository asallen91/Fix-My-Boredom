// This script predominately contains all of the main content
// It pulls all of the information it needs from 2 APIs and renders it to the screen when the app is started.

import React, {Component} from 'react';
import './App.css';
import Search from './Search';

    
class App extends Component {
  
  state = {
    // Randomized activity pulls are set here
    act: {
      results: [],
    },
    // Activity types are set here to be passed down to the API pull
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
    // Background image is set here
    Bckgrnd: {
      bckgrnd: [],
      loaded: false
    },
    // Specific activities are set here
    specificAct: {
      results: [],
    }
  }

  componentDidMount() {
    this.fetchBackground()
  }

  // Random activity API pull

  fetchAny = async (url = 'https://www.boredapi.com/api/activity/') => {
    const response = await fetch(url)
    const rand = await response.json();
    this.setState ({
      act: rand
      })
  }

  // This one was interesting, I could've just dug through the API, grabbed the link I needed and set it in CSS
  // I decided to set it to state however, and modify the body element through react to achieve the same result

  fetchBackground = async (url = 'https://picsum.photos/v2/list?limit=100') => {
    const res = await fetch(url)
    const bg = await res.json();
    this.setState ({
      Bckgrnd: bg,
      loaded: true
    })
    document.body.style.backgroundImage = 'url(' + this.state.Bckgrnd[37].download_url + ')';
    console.log(bg)
  }
  
  // Specific activity API pull

  fetchSelected = async (type) => {
    const response = await fetch(`http://www.boredapi.com/api/activity?type=${type}`)
    const activityType = await response.json();
    this.setState({
      specificAct: activityType
    })
  }

  render() {
      // fetchBackground() sets a boolean inside state to True which in turn allows the rendering of all of the components
    if (this.state.loaded === true) {
      return (
        <div className="App">
          <div className="mainContent">
            <div className="Sec1">
              <p>Bored?</p>
              <p>Select an activity below or hit the Random button!</p>

              <ul>
                {this.state.activityType.map(act => (
                  <button 
                    className="btn"
                    key={act.type}
                    
                    onClick={ () => this.fetchSelected(act.type)}
                    >{act.type.charAt(0).toUpperCase() + act.type.slice(1)}
                  </button>
                ))}
                <button 
                  className="btn" 
                  onClick={ () => this.fetchAny()}
                  >Random Activity!
                </button>
              </ul>
            </div>

            <div className="Sec2">
              <p className="suggestion">Specific Activity:</p>
              <p className="actSugg">{this.state.specificAct.activity}</p>
              <p className="suggestion">Random Activity:</p>
              <p className="actSugg">{this.state.act.activity}</p>
            </div>

          </div>
          <Search />
        </div>
      )
      // Argument required in case loaded cannot be set to true, nothing will render if so
    } else {
      return (null)
    }
  }
}


export default App;
