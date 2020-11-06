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

    let east = []
    let north = []
    let tvd = []

    for (let items of rawData){
        east.push(items.gridEast)
        north.push(items.gridNorth)
        tvd.push(-items.tvd)
    }
}
    render(){
        return (
            <TableContainer component={Paper}>
            <Table  size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>

                </TableRow>
                </TableHead>
                <TableBody>
                
                    <TableRow key="name">
                    <TableCell component="th" scope="row">
                        
                    </TableCell>

                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        );

    }
}