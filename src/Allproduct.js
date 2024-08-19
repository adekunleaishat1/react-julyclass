import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getproduct } from './service/Productservice'
import { FetchingFailed, FetchingSuccessful, FetchingUser } from './Redux/UserSlice'
import axios from 'axios'

const Allproduct = () => {
    const dispatch = useDispatch()
    const {alluser , isfetching, fetcherror} = useSelector(state=> state.userslice)
     console.log(alluser);

     useEffect(() => {
         getproduct(dispatch)
     }, [])
     
//    useEffect(() => {
//     dispatch(FetchingUser())
//     axios.get("http://localhost:1234/product")
//     .then((res)=>{
//         dispatch(FetchingSuccessful(res.data))
//         console.log(res);
//     }).catch((err)=>{
//         dispatch(FetchingFailed())
//         console.log(err);
//     })
     
//    }, [])
   
  return (
    <div>
      {isfetching ? "Loading ..." :   alluser.map((el)=>(
        <>
        <div className="card" style={{width: "18rem"}}>
            <img src={el.productimage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{el.productdescription}</h5>
                <p className="card-text">{el.productdescription}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
         </div>
        </>
      ))}
    </div>
  )
}

export default Allproduct