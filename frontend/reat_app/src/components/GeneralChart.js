import React from 'react'
import Plotly from "plotly.js-gl3d-dist-min";
import createPlotlyComponent from "react-plotly.js/factory";
import { Box } from '@material-ui/core';
const Plot = createPlotlyComponent(Plotly);


export default class GeneralChart extends React.Component{

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
        let tvd = []

        for (let items of rawData){
            east.push(items.gridEast)
            north.push(items.gridNorth)
            tvd.push(-items.tvd)
        }


        this.setState(
            {
                east: east,
                north: north,
                tvd: tvd,
            }
        )
        console.log(tvd)
    }
    
    render(){
        return(
           
            <Box height={"auto"} width={"100%"} alignContent={"center"} justifyContent={"center"} >
                <Plot 
                    data={[
                    {
                        
                        type: 'scatter3d',
                        mode: 'lines',
                        x: this.state.north,
                        y: this.state.east,
                        z: this.state.tvd,
                        
                    }
                    ]}
                    layout={ { 
                        title: '',
                        autosize: false,
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