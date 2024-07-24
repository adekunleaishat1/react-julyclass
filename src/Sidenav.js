import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
    const mysyl = {
      width:"300px",
      height:"100vh",
      backgroundColor:"blue",
      padding:"20px 10px",
      iner:{
        color:"white",
        textDecoration:"none",
        padding:"10px 10px"
      }
    }
  return (
    <div>
        <div>
            <ul style={mysyl}>
                <li ><Link style={mysyl.iner} to="/landingpage/" >Dashboard</Link></li>
                <li ><Link style={mysyl.iner} to="/landingpage/profile" >Profile</Link></li>
                <li ><Link style={mysyl.iner} to="" >Document</Link></li>
                <li ><Link style={mysyl.iner} to="" >Resources</Link></li>

            </ul>
        </div>
    </div>
  )
}

export default Sidenav