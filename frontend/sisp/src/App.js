import React, {Component} from 'react';
import './assets/css/App.css';
import { Bar } from 'react-chartjs-2';
import {newPipe} from './Pipe.js'
import PipeChart from './components/PipeChart';
import PipeForm from './components/PipeForm'

class App extends Component {
  render(){
    return(
      <div className="App">
        <PipeChart height="100%" width="33vh" />
        <PipeForm></PipeForm>
      </div>
    )
  }
}

export default App;