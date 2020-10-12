import React from 'react'
import {
        Edit,
        Close,
        
        } from '@material-ui/icons'
import {
        IconButton,
        Dialog,
        DialogTitle,
        DialogContent,
        DialogActions,

        } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'


export default function StatusForm() {

    let closeButton = {
        float: "right"
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    return(
        <div>
            <IconButton aria-label="edit" variant='text' onClick={handleClickOpen} >
                <Edit/>       
            </IconButton>
            <Dialog 
            fullScreen
            open={open}
            onClose={handleClose}
            >
                <DialogTitle>
                    Editar grafica de estado mecanico

                    <IconButton style={closeButton} aria-label="Close" onClick={handleClose}>
                        <Close/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    
                </DialogContent>
            </Dialog>

        </div>
    )
    
}