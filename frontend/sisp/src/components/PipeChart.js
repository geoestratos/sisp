import React,  {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import '../assets/css/chart.css'

class PipeChart extends Component{
    state = {
        chartData: {}
    }

    async componentDidMount(){
        await this.get_state()
    }

    get_state = async () => {
        let module = this.props.module
        let request = 'http://127.0.0.1:8000/api/'
        let data = await (await fetch(request.concat(module))).json()
        

        let columnPrograms = this.programtype_separator(data, 'gc')
        let trPrograms = this.programtype_separator(data, 'tr')
        
        let trMdData = []
        let trTvdData = []

        let columnMdData = []
        let columnTvd = []

        let trlabels = []

        let basicDataset = []
        
        for (let item of trPrograms.plan){
            trTvdData = trTvdData.concat(-(item.endTvd-item.startTvd))
            trMdData = trMdData.concat(-(item.endMd-item.startMd))
            trlabels = trlabels.concat(item.pipeDiameter)

            
            console.log(item.pipeDiameter)
            if(item.pipeDiameter === '7') {
                
            }           
        }

        basicDataset = [{
            label: 'Plan',
            backgroundColor: "#D03C3E",
            barPercentage: 1.0,
            barThickness: 10,
            stack: 'Stack 0',
            data: trMdData.reverse(),    
        }]




        this.setState({
            chartData: {
                labels: trlabels.reverse(),
                datasets: basicDataset

            }
        })
        console.log(trlabels)
    }   
    
    programtype_separator(data, type){
        let plan = []
        let real = []

        if (type === 'gc'){
            for(let item of data){

                for (let i of item.geoColumns){

                    if (i.programType === "plan"){
                        plan = plan.concat(i)
                    }
                    else{
                        real = real.concat(i)
                    }
                    
                }
                
            }       
       }
       
        else {
            for(let item of data){
                for (let i of item.trStates){
                    if (i.programType === 'plan'){
                        plan = plan.concat(i)
                    }
                    else{
                        real = real.concat(i)
                    }
                }
            }   
        }
        return{plan, real}
    }
    
    render(){
        return(
            
                <Bar 
                    data={this.state.chartData}
                    
                    options={{
                        maintainAspectRatio: false
                    }}
                />
          
            
        )
    }
}


export default PipeChart;