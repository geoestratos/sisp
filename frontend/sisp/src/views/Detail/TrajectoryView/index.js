import React from 'react'

import {Container, Grid} from '@material-ui/core'
import Source from '../../../components/Source'
import TrajectoryChart from './TrajectoryChart'

class TrajectoryDetail extends React.Component{
    

render(){
    return(
        <div>
            <Container maxWidth="xl" >
                <Source well="trstate/"/>
                
                <TrajectoryChart/>
            </Container>
        </div>
    )
}
}

export default TrajectoryDetail