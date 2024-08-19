import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'font-awesome/css/font-awesome.min.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Todo from './Todo';
import Notfound from './Notfound';
import Navbar from './Navbar';
import Landing from './Landing';
import Http from './Http';
import Oneproduct from './Oneproduct';
import User from './User';
import Formik from './Formik';
import FormikLogin from './FormikLogin';
import Music from './Music';
import Product from './Product';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Allproduct from './Allproduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={ <App/>} />
      <Route path='/http'  element={ <Http/>} />
      <Route path='/one/:id'  element={ <Oneproduct/>} />
      <Route path='/user'  element={ <User/>} />
      <Route path='/form'  element={ <Formik/>} />
      <Route path='/formlogin'  element={ <FormikLogin/>} />
      <Route path='/music'  element={ <Music/>} />
      <Route path='/product'  element={ <Product/>} />
      <Route path='/allproduct'  element={ <Allproduct/>} />
       
      <Route path='/*'  element={ <Notfound/>} />
      <Route path='/landingpage'  element={ <Landing/>} >
        <Route path='/landingpage/'  element={ <Todo/>} />
        <Route path='/landingpage/profile'  element={<Home/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
