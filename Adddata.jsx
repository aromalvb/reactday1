import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Adddata = () => {
  return (
    <div style={{paddingP:"80px"}}>
        <Typography variant='h4'>Add Blog Details</Typography>
        <TextField label='Blog name' variant='outlined'></TextField><br /><br />
        <TextField label='Description' variant='outlined'></TextField><br /><br />
        <TextField label='Author name' variant='outlined'></TextField><br /><br />
        <Button  variant='contained' color='success'>SUBMIT</Button>
        <Button variant='contained' color='error'></Button>
    </div>
  )
}

export default Adddata