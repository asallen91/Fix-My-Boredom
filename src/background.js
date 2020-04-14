import React, { Component } from 'react';

class Background extends Component {

    state = {
        results: []
    }

    componentDidMount() {
        this.fetchBackground()
    }

    fetchBackground = async (url = 'https://picsum.photos/v2/list?limit=1084') => {
        const res = await fetch(url)
        const bg = await res.json();
        this.setState ({results: bg})
      }

    //   implement background image(s) from pulled API

    render() {
        return(
            <div classname="App"></div>
        )
    }
}

export default Background