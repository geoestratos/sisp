import React from 'react'

import {Container, Grid} from '@material-ui/core'
import Source from '../../../components/Source'
import TrajectoryChart from './TrajectoryChart'

class TrajectoryDetail extends React.Component{
    state = {}

    async componentDidMount(){
        await this.get_APIdata()
    }

    get_APIdata = async () => {
        let adress = 'http://127.0.0.1:8000/trajectory/data/'
        let rawData =  await(await fetch(adress)).json()

        this.setState({
            rawData: rawData
        })

    }

render(){
    return(
        <div>
            <Container maxWidth="xl" >
                <Source well="trstate/"/>
                <Grid container spacing={3} justify={'center'} alignItems={'center'} >
                    <Grid item xs={10}  >
                        <TrajectoryChart data={this.state.rawData} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
}

export default TrajectoryDetail