import {  AppBar, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <Typography style={{marginRight:"80px"}}>welcome</Typography>
            <Button variant='contained' color='success'>
            <Link to={"/"}style={{textDecoration:'none',color:'white'}} >HOME</Link></Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='warning'><Link to={"/add"}style={{textDecoration:'none',color:'white'}} >ADD BLOG</Link></Button>
            </Toolbar>
            </AppBar>
    </div>
  )
}

export default Navbar