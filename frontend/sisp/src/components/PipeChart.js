import React,  {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {PipeForm} from './PipeForm'

class PipeChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            charData: {
                labels: ['Programado'],
                datasets:[]
            }
        }
    }
    datasetsUpdate(){
        this.state.charData.datasets.push(
            {
                label: 'Programado',
                backgroundColor: [
                    "#D03C3E",
                    "#0066CC",
                ],
                barPercentage: .05,

                stack: 'Stack 0',
                data: [
                    11,
                ]
        }
        )
    }
    render(){
        return(
            <div className="chart">
                <Bar 
                    data={this.state.charData}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
            
        )
    }
}

export default PipeChart;