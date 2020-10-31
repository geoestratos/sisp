import React from 'react'
import {
        Box, 
        Card, 
        CardHeader, 
        CardContent, 
        Divider,
        } from '@material-ui/core'

import PlanChart from '../../../components/PlantChart'

export default class TrajectoryChart extends React.Component{


render(){
    return(
        <div>
           <Card elevation={3} >
                <CardHeader 
                title='Vista de planta'
                />
                <Divider/>
                <CardContent>
                        <Box height={"100%"} width={"100%"} alignContent={"center"}>
                            <PlanChart data={this.props.data} />
                        </Box>        
                </CardContent>
           </Card>

        </div>
    )
}
}