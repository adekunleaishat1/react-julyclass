import axios from 'axios'
import React,{useState} from 'react'

const Product = () => {
    const [productname, setproductname] = useState("")
    const [productdescription, setproductdescription] = useState("")
    const [productimage, setproductimage] = useState("")


    // useEffect(() => {
        
    // }, [productimage])
    
     const handleimage = (e) =>{
       console.log(e.target.files[0]);
       let imagefile = e.target.files[0]
       let reader = new FileReader()
        reader.onload =(e)=>{
          console.log(e.target.result );
          setproductimage(e.target.result)
        } 
       reader.readAsDataURL(imagefile)
     }

    const post = () =>{
     console.log(productdescription, productname, productimage);

     axios.post("http://localhost:1234/product", {productdescription, productname, productimage})
     .then((res)=>{
        console.log(res);
     }).catch((err)=>{
        console.log(err);
     })
    }
  return (
    <div>
       <div className='form-group px-3 py-3 mx-auto w-50 shadow'>
       <input className='form-control mt-3' onChange={(e)=>setproductname(e.target.value)} placeholder='Product Name' type="text" />
        <input className='form-control mt-3' onChange={(e)=>setproductdescription(e.target.value)} placeholder='Product Description' type="text" />
        <input className='form-control mt-3' onChange={handleimage} placeholder='Product Image' type="file"  multiple />
        <button className='btn btn-primary mt-3' onClick={post}>post</button>
       </div>

       <img src={productimage} alt="" />
    </div>
  )
}

export default Product