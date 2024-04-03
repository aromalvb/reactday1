import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Statebasics = () => {
     // var fanme="Aromal"
    var [name,setName] = useState("Aromal")
    var [value,setValue] = useState()
    const changeName = ()=>{
      console.log("Clicked")
      setName("Aromal")
    }
    const inputHandler =(e)=>{
        console.log(e.target.valu)
    }
  return (
    <div>
        <Typography variant='h4'>Welcome {name}</Typography>
        <TextField label='Enter name' variant='outlined' onChange={inputHandler}/> <br/>
        <Button variant='contained' color='error' onClick={changeName}>change</Button>
        </div>
  )
}
export default Statebasics