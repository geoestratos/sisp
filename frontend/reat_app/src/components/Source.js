import React from 'react'


class Source extends React.Component {
    
    state = {
        data: []
    }

    async componentDidMount(){
        await this.get_state()
    }

    get_state = async () => {
        let well = this.props.well
        let request = 'http://127.0.0.1:8000/'
        let res = await fetch(request.concat(well))
        let data =  await res.json()
        
    }


    render (){
        return(   
            <div>

            </div>
        )
    }
}

export default Source