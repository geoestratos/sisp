import React from 'react';
import ReactDOM from 'react-dom';
import  './assets/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';
import {Row, Container, Col} from 'reactstrap'

//Components
import PipeForm from './components/PipeForm';
import Navbar from './components/Navbar'
import Source from './components/Source'
import PipeData from './components/PipeData'
import PipeChart from './components/PipeChart'

ReactDOM.render(
  <React.StrictMode>
    
    <Navbar/>
    <Container></Container>
    <h1 className="display-4 ">Estado mecánico</h1>
    <Row>
      <Col xs="3"> 
        <PipeChart className="col-3" module="mecstatus/" />
      </Col>

      <PipeForm/>
      <Source well="trstate/"/>
      
    </Row>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
