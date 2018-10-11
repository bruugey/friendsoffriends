import React, { Component } from 'react';
import './App.css';

import { data } from './api/data'

import Slider from './components/slider'
import Content from './components/content'

class App extends Component {

  constructor() {
    super()
    this.state = { display: 0 }
  }

  changeDisplay = (num) => {
    this.setState({ display: num })
  }

  render() {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 my3">

        <div className="mt3 mb3 fit flex space-between items-stretch container justify-around">
          <div className="ml4 gutter"></div>

          <div className="right slider-container">
            <Slider data={data[this.state.display]} changeDisplay={this.changeDisplay}/>
          </div>    

        </div>

        <div className="absolute top-0 text-container">
          <Content data={data[this.state.display]}/>
        </div>  
        
      </div>
    );
  }
}

export default App;
