import React from 'react';
import './assets/css/App.css';
import { Bar } from 'react-chartjs-2';
import {newPipe} from './Pipe.js'



function App() {
  

  
  var data={
    labels: ['Programado', 'Real'],
    datasets: [],
  }
  data.datasets.push(newPipe)
  
  const options={
     mantainAspectRatio: false,
     responsive: true,
    
   }

  return (
    <div className="App" style={{width: '100%', heigth: '500px'}}>
      <h2>Estado Mecanico</h2>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default App;
