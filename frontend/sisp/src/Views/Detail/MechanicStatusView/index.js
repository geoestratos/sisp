import React from 'react'

import {Container, Grid} from '@material-ui/core'
import Navbar from '../../../components/Navbar'
import Source from '../../../components/Source'
import StatusChart from './StatusChart'
import '../../../assets/css/chart.css'


class MecstatusDetail extends React.Component{

render(){
    return(
        <div>
            <Navbar/>
            <Container maxWidth="xl" >
                <Source well="trstate/"/>
                <Grid container spacing={3} >
                    <Grid item xs={12}>
                        <StatusChart/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
}

export default MecstatusDetail