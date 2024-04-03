import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <AppBar>
            <Toolbar>
              <Typography variant='h5'>My App</Typography>
              {/* <Button variant='contained' color='success'>Log In</Button>
              <Link to={'/'} style={{textDecoration:"none",color:"white"}}>Log In</Link>
              <Button/>
              <Button variant='contained'>Sign up</Button>
              <Link to={'/signup'} style={{textDecoration:"none",color:"white"}}>Signup</Link>
              <Button/> */}

              <Button variant='contained' color='success'>
                <Link to={'/'} style={{textDecoration:"none",color:"white"}}>Log In</Link>
                </Button>
                &nbsp; &nbsp;
                <Button variant='contained' color='error'>
                <Link to={'/signup'} style={{textDecoration:"none",color:"white"}}>Sign Up</Link>
                </Button>
                </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar