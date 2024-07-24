import React, {useState, useEffect} from 'react'
import axios from 'axios'

const User = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [alluser , setalluser] = useState([])
    const [load, setload] = useState(false)
    const [show, setshow] = useState(false)


    useEffect(() => {
        axios.get("http://localhost:1234/User")
        .then((res)=>{
            console.log(res);
            setalluser(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }, [load])
    
    const register = () =>{
        setload(true)
      console.log(username, email, password);
      let existuser = alluser.find((user)=> user.email == email)
      console.log(existuser);
      if (existuser) {
        alert("user already exist")
        setload(false)
      }else{
        try {
            axios.post("http://localhost:1234/User", {username, email, password})
            .then((res)=>{
              console.log(res);
              setload(false)
            }).catch((err)=>{
              console.log(err);
              setload(false)
            })
          } catch (error) {
            console.log(error);
            setload(false)
          }
      }
    }

    const Show = () =>{
        setshow(show ? false : true)
        // setshow(!show)
    }

  return (
    <div>
        <div className='w-50 px-3 py-3'>
        <div className='form-group mt-3'>
            <label htmlFor="">Username</label>
            <input className='form-control' onChange={(e)=>setusername(e.target.value)} type="text" />
        </div>
        <div className='form-group mt-3'>
          <label htmlFor="">Email</label>
           <input className='form-control' onChange={(e)=>setemail(e.target.value)}  type="email" />
        </div>
        <div className='form-group mt-3'>
          <label htmlFor="form-group">Password</label>
          <input className='form-control' onChange={(e)=>setpassword(e.target.value)}  type={show ? "text" : "password" } />
          <button onClick={Show}>{show ? "hide" : "show"}</button>
        </div>
        <button onClick={register} className='btn btn-primary'>{load ? "loading..." : "Sign Up"}</button>
        </div>
       
       
       
    </div>
  )
}

export default User