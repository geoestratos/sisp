import React,  {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import '../assets/css/chart.css'

class MecChart extends Component{
    state = {
        chartData: {
            
        }
    }

    async componentDidMount(){
        await this.get_APIdata()
    }

    get_APIdata = async () => {
        let type = this.props.type.concat('/?mecStatus')
        let program = ['progamType='].concat(this.props.program)
        let adress = 'http://127.0.0.1:8000/api/'
        let data =  await(await fetch(adress.concat(request))).json()


        console.log(data)

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


export default MecChart;