import React from 'react'
import {
        Box, 
        Card, 
        Grid,
        CardHeader, 
        CardContent, 
        Divider,
        } from '@material-ui/core'

import PlantChart from '../../../components/PlantChart'
import GeneralChart from '../../../components/GeneralChart'
import TrajectorySummary from '../../../components/TrajectorySummary'

export default class TrajectoryChart extends React.Component{
    

render(){
    return(
        
        <Grid container spacing={3} justify={'center'} alignItems={'center'}  >
            <Grid item xs={1}/>
            <Grid item xs={5}>
                <Card elevation={3} >
                        <CardHeader 
                        title='Vista de planta'
                        />
                        <Divider/>
                        <CardContent>
                                <PlantChart/>       
                        </CardContent>
                </Card>
                

            </Grid>

            <Grid item xs={5}>
                <Card elevation={3} >
                        <CardHeader 
                        title='Vista general'
                        />
                        <Divider/>
                        <CardContent>  
                                <GeneralChart/>      
                        </CardContent>
                </Card>
            </Grid>  
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Card elevation={3} >
                        <CardHeader 
                        title='Resumen'
                        />
                        <Divider/>
                        <CardContent>  
                                <TrajectorySummary/>    
                        </CardContent>
                </Card>
            </Grid>          
        </Grid>

    )
}
}