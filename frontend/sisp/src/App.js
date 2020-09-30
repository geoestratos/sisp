import React, {Component} from 'react';
import './assets/css/App.css';
import { Bar } from 'react-chartjs-2';
import {newPipe} from './Pipe.js'
import PipeChart from './components/PipeChart';
import PipeForm from './components/PipeForm'
import PrincipalNavbar from './components/Navbar'

class App extends Component {
  render(){
    return(
      <div className="App">
        <PrincipalNavbar></PrincipalNavbar>
        <PipeForm></PipeForm>
      </div>
    )
  }
}

export default App;