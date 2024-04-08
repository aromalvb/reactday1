import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, {useEffect, useState } from 'react'

const Viewdata = () => {
    var [users,setUsers] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typlcode.com/posts")
        .then((res) => {
            console.log(res.data)
            setUsers(res.data)
        })
        .catch(err=>console.log(err))
    })
  return (

         <div style={{padding:"50px"}}>
        <Table>
                <TableHead>
                    <TableRow>
                        
                        <TableCell>ID</TableCell>
                        <TableCell>TITILE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell>{val.id}</TableCell>
                                <TableCell>{val.titile}</TableCell>
                            </TableRow>

                        ) 
                    })}
                </TableBody>
        </Table>
    </div>
)}

export default Viewdata