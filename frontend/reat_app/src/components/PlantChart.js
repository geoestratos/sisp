import React from 'react'
import Plotly from "plotly.js-basic-dist";

import createPlotlyComponent from "react-plotly.js/factory";
import { Box } from '@material-ui/core';
const Plot = createPlotlyComponent(Plotly);


const PlantChart = () => {

    
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

export default PlantChart