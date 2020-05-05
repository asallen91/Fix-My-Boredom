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

  // div up your siz, buttons top left, with a title
  // Results  top right, with corrosponding titles
  // Search query underneath

  // for mobile users, use smaller buttons and display results below

  render() {
    if (this.state.loaded === true) {
      return (
        <div className="App"
          style={{
          backgroundImage: 'url(' + this.state.btnBckgrnd[37].download_url + ')',
          height: '100vh'
          }}>
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
    } else {
      return (null)
    }
  }
}


export default App;
