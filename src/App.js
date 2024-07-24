import React, {useState} from 'react'
import Button from './Button'
import Addtodo from './Addtodo'
import Displaytodo from './Displaytodo'
import Navbar from './Navbar'
// import './App.css'


const App = () => {
  const [alltodo, settodo]= useState([])

  const mystyl ={
    header:{
     fontSize:"70px" , 
     color:"yellow"
    },
    backgroundColor:"blue",
     fontSize:"70px" , 
     color:"red"
  }
  const sty = {
     fontSize:"70px" , 
     color:"red",
     fontWeight:"700"
  }
  const register = () =>{
    alert("working")
  }
  const addTodo =(input) =>{
    console.log(input);
    settodo([...alltodo, input])
  }
  
  return (
    <>
    <Navbar/>
     <h1 style={{backgroundColor:"red", fontSize:"30px" , color:"green"}}>New class</h1>
     <p className='py' >Internal styling</p>
     <p style={mystyl.header}>Substyling</p>
     <h2 style={sty}>new style</h2>
     <p style={{color:"gray",}}></p>
     <Button clik={register} stly="btn btn-dark" value="register"/>
     <Addtodo addTodo={addTodo}/>
     <Displaytodo alltodo={alltodo}/>
    </>
  )
}

export default App