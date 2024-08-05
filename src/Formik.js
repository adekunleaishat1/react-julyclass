import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Formik = () => {

    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
            username:yup.string().min(4,"username cannot be lessthan four characters").required("username cannot be empty"),
            email:yup.string().email("email must be valid").required("email cannot be empty"),
            password:yup.string().matches(`^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])`, "password must have atleast one uppercase,a special character and an integer ").required("Password cannot be empty")
        }),
        onSubmit:(value)=>{
         console.log(value);
         axios.post("http://localhost:1234/User",value)
         .then((res)=>{
            console.log(res);
            toast.success("signup successful")
         }).catch((err)=>{
            console.log(err);
            toast.error(err.message)
         })
        }
    })
    console.log(formik.errors);
    console.log(formik.touched);
  return (
    <div>
        <form onSubmit={formik.handleSubmit} className='w-50 mx-auto shadow px-3 py-3' action="">
            <h1>Sign up</h1>
            <div className='form-group mt-3'>
                <label htmlFor="">Username</label>
                <input name='username' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' type="text"  />
                <p className='text-danger fs-6'>{formik.touched.username ? formik.errors.username : ""}</p>
            </div>
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

export default Formik