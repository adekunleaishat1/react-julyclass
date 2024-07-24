import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Oneproduct = () => {
    const {id} = useParams()
    console.log(id);
    useEffect(() => {
       axios.get(`https://dummyjson.com/products/${id}`)
       .then((res)=>{
        console.log(res);
       }).catch((err)=>{
        console.log(err);
       })
    }, [])
    
  return (
    <div>

    </div>
  )
}

export default Oneproduct