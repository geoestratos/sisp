import React,  {Component} from 'react';
import {Bar} from 'react-chartjs-2';


class PipeChart extends Component{
    constructor(props){
        super(props)
        this.state = {chartData: props.chartData}
        console.log(props)
    }
    
    render(){
        return(
            <div className="chart">
                <Bar 
                    data={this.props.chartData}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
            
        )
    }
}


export default PipeChart;