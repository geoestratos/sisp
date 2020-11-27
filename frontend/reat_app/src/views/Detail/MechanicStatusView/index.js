import React from 'react'

import {Container, Grid} from '@material-ui/core'
//import Navbar from '../../../components/Navbar'
import Source from '../../../components/Source'
import StatusChart from './StatusChart'



class MecstatusDetail extends React.Component{

render(){
    return(
        <div>
        
            <Container maxWidth="xl" >
                <Source well="trstate/"/>
                <Grid container spacing={3} justify={'center'} alignItems={'center'} >
                    <Grid item xs={10}  >
                        <StatusChart/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
}

export default MecstatusDetail