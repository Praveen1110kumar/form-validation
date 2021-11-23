// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [data ,setdata]=useState({
//     name:"",
//     email:"",
//     password:""
//   })

//   const handlechange=(e)=>{
//     setdata({...data,[e.target.name]:e.target.value})//[input name]:input value
//     console.log(data);
//   }
//   return (
//     <div className="App">
//     <form>
//       <input type="text" placeholder="enter your name " name="name" onChange={handlechange}></input>
//       <input type="text" placeholder="enter your email " name="email" onChange={handlechange}></input>
//       <input type="password" placeholder="enter your password " name="password" onChange={handlechange}></input>
//       <input type="submit" ></input>

//     </form>
//     </div>
//   );
// }


// export default App;

// import React from 'react'
// import {useFormik} from "formik"
// function App() {

//   const formtag=useFormik({
//     initialValues:{
//       name:"",
//       email:"",
//       password:""
//     },
//     onSubmit:(values)=>{
//        console.log(values)
//     },
//     validate:(values)=>{
//       const error={};
//       if(!values.name){
//         error.name="name is empty"
//       }
//       else if (!values.email){
//         error.email="email is required"
//       }
//       else if (!values.password){
//         error.password="password is empty"
//       }




//       return error;
//     }   
//   })

// return (
// <form onSubmit={formtag.handleSubmit}>
//   <input type="text" name="name" onChange={formtag.handleChange} value={formtag.values.name} id="name"></input>
//   {formtag.errors.name? <div>{formtag.errors.name}</div> :null}
//   <input type="text" name="email"  onChange={formtag.handleChange} value={formtag.values.email} id="email"></input>
//   {formtag.errors.email? <div>{formtag.errors.email}</div> :null}
//    <input type="password" name="password" onChange={formtag.handleChange} value={formtag.values.password} id="password"></input>
//   {formtag.errors.password? <div>{formtag.errors.password}</div>:null}
//   <input type="submit"></input>

// </form>  
// )
  
// }

// export default App

// import React from 'react'
// import { useFormik } from 'formik'
// import "./App.css"

// function App() {

// const formik=useFormik({
//   initialValues:{
//     name:"",
//     email:"",
//     password:""
//   },
//   onSubmit:values=>{
//     console.log(values);
//   },
//   validate:values=>{
//     const err={};
//     if(!values.name){
//       err.name="required"
//     }
//     if(!values.email){
//       err.email="required"
//     }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       err.email = 'Invalid email address';
//     }
  
//     if (!values.password){
//       err.password="required"
//     }else if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)) {
//       err.email = 'Invalid  password';
//     }



//     return err
//   }

// })

//   return (
//   <form onSubmit={formik.handleSubmit} >
//     <div className="formcontainer">
//       <div className="field">
//         <div>
//         <label htmlFor="name">name:</label>
//         </div>
//         <div>
//         <input 
//         type="text"
//         name="name"
//         id="name" 
//         value={formik.values.name} 
//         onChange={formik.handleChange} 
//         onBlur={formik.handleBlur}>
//         </input></div>
//         {formik.touched.name&&formik.errors.name?<div className="error"> {formik.errors.name} </div>:null}
//       </div>

//       <div className="field">
//         <div>
//         <label htmlFor="email">email:</label></div>
//         <div>
//         <input 
//         type="text" 
//         name="email" 
//         id="email" 
//         value={formik.values.email} 
//         onChange={formik.handleChange} 
//         onBlur={formik.handleBlur}>
//         </input></div>
//         {formik.touched.email&&formik.errors.email?<div className="error"> {formik.errors.email} </div>:null}
//       </div>

//       <div className="field">
//         <div>
//         <label htmlFor="password">password:</label></div>
//         <div>
//         <input 
//         type="password" 
//         name="password" 
//         id="password" 
//         value={formik.values.password} 
//         onChange={formik.handleChange} 
//         onBlur={formik.handleBlur}></input></div>
//         {formik.touched.password&&formik.errors.password?<div className="error"> {formik.errors.password} </div>:null}
//       </div>
//         <button type="submit">submit</button>
//         </div>
//       </form>
//         )
// }

// export default App


import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 
 const Basic = () => (
   <div>
     <h1>Any place in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default Basic;