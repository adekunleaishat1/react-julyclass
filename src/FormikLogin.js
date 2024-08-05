import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const FormikLogin = () => {
      const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:yup.object({
            email:yup.string().email("email must be valid").required("email cannot be empty"),
            password:yup.string().matches(`^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])`, "password must have atleast one uppercase,a special character and an integer ").required("Password cannot be empty")
        }),
        onSubmit: async(value)=>{
         console.log(value);
       let response =   await  axios.get("http://localhost:1234/User")
       console.log(response);
         if (response.status) {
            let data = response.data
          let existuser =  data.find((user)=> user.email === value.email)
          console.log(existuser);
          if (!existuser) {
            toast.error("invalid email")
          }else{
            if (existuser.password == value.password) {
                toast.success("login successful")
                setTimeout(() => {
                    navigate("/music")
                }, 5000);
            }else{
                toast.error("incorrect password")
            }
          }

         }
        //  .then((res)=>{
        //     console.log(res.data);

        //     toast.success("")
        //  }).catch((err)=>{
        //     console.log(err);
        //     toast.error(err.message)
        //  })
        }
    })
    console.log(formik.errors);
    console.log(formik.touched);


  return (
    <div>
        <form onSubmit={formik.handleSubmit} className='w-50 mx-auto shadow px-3 py-3' action="">
            <h1>Login</h1>
            <div className='form-group mt-3'>
                <label htmlFor="">Email</label>
                <input name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' type="email"  />
                <p className='text-danger fs-6'>{formik.touched.email ? formik.errors.email : ""}</p>

            </div>
            <div className='form-group mt-3'>
                <label htmlFor="">Password</label>
                <input name='password' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' type="password"  />
                <p className='text-danger fs-6'>{formik.touched.password ? formik.errors.password : ""}</p>
            </div>
            <div className='mt-3'>
                <button type='submit' className='btn btn-primary'>Sign up</button>
                <ToastContainer/>
            </div>
        </form>
    </div>
  )
}

export default FormikLogin