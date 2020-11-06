import React from 'react'
import {
        Box, 
        Card, 
        CardHeader, 
        CardContent, 
        Divider,
        IconButton
        } from '@material-ui/core'

import PipeChart from '../../../components/PipeChart'
import GeoChart from '../../../components/GeoChart'


export default class StatusChart extends React.Component{


render(){
    return(
        <div>
           <Card elevation={3} >
                <CardHeader 
                title='Estado Mecanico'
                />
                <Divider/>
                <CardContent>
                        <Box height={"100%"} width={"100%"} alignContent={"center"}>
                                <Box height={400} width={"25%"} display= {"inline-block"}>
                                        <PipeChart className="chart" program="plan"/>
                                </Box>
                                <Box height={393} width={"25%"} marginLeft={"-3px"} display= {"inline-block"}>
                                        <GeoChart className="chart" program="plan"/>
                                </Box>
                                <Box height={393} width={"25%"} marginLeft={"-3px"} display= {"inline-block"}>
                                        <GeoChart className="chart" program="real"/>
                                </Box>
                                <Box height={393} width={"25%"} marginLeft={"-3px"} display= {"inline-block"}>
                                        <PipeChart className="chart" program="real"/>
                                </Box>
                        </Box>
                        
                </CardContent>
           </Card>

        </div>
    )
}
}