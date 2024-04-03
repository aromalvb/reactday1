import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Counter = () => {
    var [count,setCount] = useState(0)
    const incCount = ()=>{
        setCount(count+1)

    }
    const decCount = ()=>{
        if(count>0){
        setCount(count-1)
    }
    }
  return (
    <div>
         <Typography variant='h4'>count: 0</Typography>
         <Button variant='contained' color='success'>+</Button>
         <Button variant='contained' color='error'>-</Button>
    </div>
  )
}

