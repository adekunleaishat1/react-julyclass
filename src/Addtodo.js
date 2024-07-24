import React, {useState} from 'react'

const Addtodo = ({addTodo}) => {
    // console.log(props);
    const [input, setinput] = useState("")
    // console.log(input);
  return (
    <div>
        <input onChange={(e)=>setinput(e.target.value)} type="text" />
        <button onClick={()=>addTodo(input)} >Addtodo</button>
    </div>
  )
}

export default Addtodo