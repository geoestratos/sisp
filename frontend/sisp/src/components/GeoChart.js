import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'

export default class GeoChart extends Component {

    state = {
        chartData:{
            labels: [''],
            datasets: []
        },
        options:{
            maintainAspectRatio: false,
            responsive: true,
            legend: false,
            scales: {
                yAxes:[{
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        display: false,
                        min: -4500,
                    }
                }],
                xAxes:[{
                    stacked: true,
                }],
            }
        }
    }
    async componentDidMount(){
        await this.get_APIdata()
    }

    get_APIdata = async () => {
        let adress = 'http://127.0.0.1:8000/api/geocolumn/?programType='
        let rawData =  await(await fetch(adress.concat(this.props.program))).json()

        this.get_unpacket_data(rawData)
    }   

    get_unpacket_data(rawData){
        let baseDataset = []
        
        for(let items of rawData){
            let backgroundColor
            backgroundColor = this.get_backgroundColor(items.layer)
            baseDataset.push(
                {
                   label: [items.layer,],
                   borderWidth: 1,
                   borderColor: 'gray',
                   fill: false,
                   backgroundColor: [backgroundColor,],
                   data: [-items.endMd+items.startMd]
                }
            )
        }
        this.setState({
            chartData: {
                datasets: baseDataset,
            }
        })
    }

    get_backgroundColor(layer){
        let backgroundColor
        
        switch(layer){
            case 'T.A':
                backgroundColor = '#5FBDF7'
                break
            case 'RPLCN':
                backgroundColor = '#FFF2AE'
                break
            case 'PLCNS':
                backgroundColor = '#FDF498'
                break
            case 'PLCNM':
                backgroundColor = '#FDF498'
                break
            case 'PLCNI':
                backgroundColor = '#FDF498'
                break
            case 'MS':
                backgroundColor = '#FCEF33'
                break
            case 'YAC-3':
                backgroundColor = '#FCEF33'
                break
            case 'YAC-2':
                backgroundColor = '#FCEF33'
                break
        }
        return (backgroundColor)
    }
    render(){
        return(
            <Bar data={this.state.chartData} options={this.state.options} />
        )
    }
}