import React,{useState} from 'react'
import Button from './Button'

const Todo = () => {
    const [title, setTitle] = useState("")
    const [content, setcontent] = useState("")
    const [todoaray, settodoaray] = useState([])
    const [onetodo, setonetodo] = useState({})
    const [index, setindex] = useState(null)

    const Addtodo = () =>{
       let todoobj = {
         title,
        content
       }
       console.log(todoobj);
       settodoaray([...todoaray, todoobj])
       setTitle("")
       setcontent("")
       console.log(todoaray);
    }

    const deltodo = (i) =>{
        console.log(i);
        todoaray.splice(i, 1)
        settodoaray([...todoaray])
    }
    const edittodo = (i, todo) =>{
      console.log(i, todo);
      setonetodo(todo)
      setindex(i)

    }
    const save = () =>{
      console.log(onetodo);
      todoaray[index] = onetodo
      console.log(todoaray[index]);
      settodoaray([...todoaray])
    }

  return (
    <>
      <div>
          <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" />
          <input value={content} onChange={(e)=> setcontent(e.target.value)} type="text" />
          <button onClick={Addtodo}>Addtodo</button>


          <div>
            {todoaray.map((todo, index)=>(
                
                  <div key={index} className='d-flex justify-content-between align-items-center'>
                  <h1>{todo.title}</h1>
                  <h1>{todo.content}</h1>
                  {/* <Button clik={()=>deltodo(index)} stly="btn btn-success" value="Delete"/> */}
                  <button onClick={()=>deltodo(index)}>Delete</button>
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>edittodo(index, todo)}>Edit</button>
                  </div>
                
            ))

            }
          </div>





        



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input onChange={(e)=> setonetodo({...onetodo, title:e.target.value})} value={onetodo.title} className='form-control mt-3' type="text" />
        <input onChange={(e)=>setonetodo({...onetodo, content:e.target.value})} value={onetodo.content} className='form-control mt-3' type="text" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={save} type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Todo