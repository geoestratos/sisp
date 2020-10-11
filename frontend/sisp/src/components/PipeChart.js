import React,  {Component} from 'react';
import {Bar} from 'react-chartjs-2';

export default class PipeChart extends Component{
    state = {
        chartData: {},
        options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: false,
            scales: {
                xAxes: [{
                    stacked: true,
                    ticks: {}
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        min: -4500,
                        padding: 0
                        }
                }]
            },
            
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                            return tooltipItem.yLabel;
                    }
                }
            },
        }
    }


    async componentDidMount(){
        await this.get_APIdata()
    }

    get_APIdata = async () => {
        let adress = 'http://127.0.0.1:8000/api/trstate/?programType='
        let rawData =  await(await fetch(adress.concat(this.props.program))).json()
        let backgroundColor

        if (this.props.program === 'plan'){
            backgroundColor = '#ce4e4e'
        }
        else {
            backgroundColor = '#5f7daa'
        }

        this.get_unpacket_data(rawData, backgroundColor)
    }   

    get_unpacket_data(rawData, backgroundColor){
        let labels = []
        let dataMd = []
        let dataTvd = []
        let connectionData = []
        let preData

        if(this.props.program === 'real'){
            this.setState({
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                reverse: true,
                                
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                display: false,
                            }
                        }],
                    }
                }
            })
        }
        
        for(let items of rawData){
            preData=dataMd[dataMd.length -1]
            labels.push(items.pipeDiameter)
            dataMd.push(-items.endMd+items.startMd)
            dataTvd.push(-items.endTvd+items.startTvd)

            if (items.isConnection === true){
                connectionData.push(preData)
            }
            else{
                connectionData.push('0')
            }
        }

        this.setState({chartData: {
            labels: labels,
            
            datasets: [
                {
                    backgroundColor: 'rgba(0,0,0,0.0)',
                    barPercentage: 0.3,
                    data: connectionData,
                },    
                {
                    backgroundColor: backgroundColor,
                    barPercentage: 0.3,
                    data: dataMd,
                },
            ]
        }

        })
        
        
        
    }
    
    render(){
        return(
            
                <Bar 
                    data={this.state.chartData}                    
                    options={this.state.options}                        
                />
          
            
        )
    }
}