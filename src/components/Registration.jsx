import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

export const Registration = () => {
  return (
   <div>
    <Typography>Registration Form</Typography>
    <TextField label="Enter Name" variant='outlined'/> <br/>
    <TextField type='password' label="Enter password" variant='outlined'/> <br/>
    <TextField type='number' label="enter phone number" variant='outlined'/> <br/>
    <TextField label="Enter Address" variant='outlined'/> <br/>
    <Button variant='contained' color='error'/> <Button/>
    </div>
  )
}
