import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div style={{marginTop:"80px"}}>  
    <Typography variant='h3'>Login page</Typography>
    <TextField label="Enetr Name" variant='outlined'/>
    <TextField label="password" type='password' variant='outlined'/>
    <Button variant='contained' color='error'>Login</Button>
    </div>
  )
}

export default Login


