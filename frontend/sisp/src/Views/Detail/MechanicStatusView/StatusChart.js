import React from 'react'
import {
        Box, 
        Button, 
        Card, 
        CardHeader, 
        CardContent, Divider
        } from '@material-ui/core'
import PipeChart from '../../../components/PipeChart'
import GeoChart from '../../../components/GeoChart'
import {Edit} from '@material-ui/icons'
import '../../../assets/css/chart.css'

export default class StatusChart extends React.Component{


render(){
    return(
        <div>
           <Card >
                <CardHeader action={(
                        <Button endIcon={<Edit/> } size='small' variant='text'></Button>
                )}
                title='Estado Mecanico'
                />
                <Divider/>
                <CardContent>
                        <Box height={"100%"} width={"90%"} alignContent={"center"}>
                                <Box height={400} width={"25%"} display= {"inline-block"}>
                                        <PipeChart className="chart" program="plan"/>
                                </Box>
                                <Box height={400} width={"25%"} display= {"inline-block"}>
                                        <GeoChart className="chart" program="plan"/>
                                </Box>
                                <Box height={400} width={"25%"} display= {"inline-block"}>
                                        <GeoChart className="chart" program="real"/>
                                </Box>
                                <Box height={400} width={"25%"} display= {"inline-block"}>
                                        <PipeChart className="chart" program="real"/>
                                </Box>
                        </Box>
                        
                </CardContent>
           </Card>

        </div>
    )
}
}