import axios from "axios";
import { FetchingFailed, FetchingSuccessful, FetchingUser } from "../Redux/UserSlice";



export const getproduct = (dispatch) =>{
    dispatch(FetchingUser())
    axios.get("http://localhost:1234/product")
    .then((res)=>{
        dispatch(FetchingSuccessful(res.data))
        console.log(res);
    }).catch((err)=>{
        dispatch(FetchingFailed())
        console.log(err);
    })
     
}