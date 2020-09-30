import React, {Component} from 'react'
import PipeChart from './PipeChart'

function DataConverter(props){

    return <ChartData/>;
}

class ChartData extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData: {}
        }

        
    }

    componentWillMount(){
        this.setChartData();
    }
    setChartData(){

        let label = ['',];
        let mdRange = [10,];

        this.setState({
            chartData: {
                labels: ['Programado', 'Real'],
                datasets: [
                    {
                    label: 'Dataset 1',
                    backgroundColor: "#D03C3E",
                    barPercentage: 1.0,
                    barThickness: 10,
                    stack: 'Stack 0',
                    data: label,    
                }]
            }
        });
    }    
    render(){
        return (
            <PipeChart chartData={this.state.chartData} />
        )
    }
}
export default DataConverter;
