import React from 'react'
import Plotly from "plotly.js-basic-dist";

import createPlotlyComponent from "react-plotly.js/factory";
import { Box } from '@material-ui/core';
const Plot = createPlotlyComponent(Plotly);


export default class PlantChart extends React.Component{

    state = {

    }

    async componentDidMount(){
        await this.get_APIdata()
    }

    get_APIdata = async () => {
        let adress = 'http://127.0.0.1:8000/trajectory/data/'
        let rawData =  await(await fetch(adress)).json()

        let east = []
        let north = []

        for (let items of rawData){
            east.push(items.gridEast)
            north.push(items.gridNorth)
        }

        console.log(east)
        console.log(north)
        this.setState(
            {
                east: east,
                north: north,
            }
        )
    }
    
    render(){
        return(
            <Box height={"auto"} width={"auto"} alignContent={"center"} margin={"auto"}>
                <Plot
                    data={[
                    {
                        x: this.state.north,
                        y: this.state.east,
                        type: 'scatter',
                        mode: 'lines',
                    }
                    ]}
                    layout={ { 
                        title: '',
                        autosize: false,
                        xaxis:{
                            title: 'Grid North'
                        },
                        yaxis:{
                            title: 'Grid East'
                        },
                        height:550,
                        margin:{
                            l:0,
                            r:0,
                            t:0,
                            b:0,
                            pad:0,
                            
                        },

                    
                    } }

                    config= {{
                        responsive: true
                    }}
                />
            </Box>
        )
    }
}