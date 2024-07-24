import React from 'react'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import { Outlet } from 'react-router-dom'

const Landing = () => {
    const body = {
        width:"75%",
        height:"100vh",
        padding:"10px 20px",
        backgroundColor:"white",
        cont:{
            width:"100%",
            height:"100vh",
            backgroundColor:"black",
            display:"flex",
            justifyContent:"space between",
            alignItems:"center"
            
        }
    }
  return (
    <>
    <div>
        <Navbar/>
        <div style={body.cont} >
          <Sidenav/>
          <div style={body}>
            <Outlet/>
          </div>
        </div>
       
    </div>000

    </>
  )
}

export default Landing