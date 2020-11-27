import React from 'react'
import { 
    Box, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableRow, 
    TableHead, 
    Paper } 
    from '@material-ui/core';

      
export default class TrajectorySummary extends React.Component {

    
async componentDidMount(){
    await this.get_APIdata()
}

get_APIdata = async () => {
    let adress = 'http://127.0.0.1:8000/trajectory/summary/'
    let rawData =  await(await fetch(adress)).json()



    for (let items of rawData){
        
    }
}
    render(){
        return (
            <TableContainer component={Paper}>
            <Table  size="small" aria-label="a dense table">
                <TableBody>
                    <TableRow key="name">
                        <TableCell component="th" scope="row">
                            Profundidad actual
                        </TableCell>
                    </TableRow>
                    <TableRow key="name">
                        <TableCell component="th" scope="row">
                            Profundidad final
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        );

    }
}