import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => { 
    const navigate = useNavigate()
    
    const gohome = () =>{
       navigate('/')
    }
  return (
    <div>
        <div className='mx-auto'>
        <h1>Page Notfound</h1>
        <button onClick={gohome} className='btn btn-danger'>Go Home</button>
        </div>
    </div>
  )
}

export default Notfound