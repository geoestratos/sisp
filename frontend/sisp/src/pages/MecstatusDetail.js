import React from 'react'

import {Row, Container, Col} from 'reactstrap'

import PipeForm from '../components/PipeForm';
import Navbar from '../components/Navbar'
import Source from '../components/Source'
import PipeChart from '../components/MecChart'
import MecChart from '../components/MecChart';

class MecstatusDetail extends React.Component{

render(){
    return(
        <div>
        <Navbar/>
        <Container></Container>
        <h1 className="display-4 ">Estado mecánico</h1>
        <Row>
            <Col xs="3"> 
            <MecChart className="col-3" type="trstate" program="plan"/>
            </Col>

            <PipeForm/>
            <Source well="trstate/"/>
            
        </Row>
        </div>
    )
}
}

export default MecstatusDetail