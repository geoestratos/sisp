import React from 'react'
import {Button} from 'reactstrap'

class Source extends React.Component {
    
    state = {
        data: []
    }

    async componentDidMount(){
        await this.get_state()
    }

    get_state = async () => {
        let well = this.props.well
        let request = 'http://127.0.0.1:8000/api/'
        let res = await fetch(request.concat(well))
        let data =  await res.json()
        
        console.log(data)
    }


    render (){
        return(   
            <div>
            <Button color="link">{}</Button>  
            </div>
        )
    }
}

export default Source