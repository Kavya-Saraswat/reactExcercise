import React from "react";
import {useFormik} from 'formik';
import { signInSchema } from "./mik";


export default function SignupInformation() {

    const formik= useFormik({
     initialValues:{
       email:'',
       username:'',
       password:'',
       confirmpassword:''
     },
      
     validationSchema: signInSchema,

     onSubmit:value=>{
        console.log('form-data', formik.values);
     }

    });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="email" className="email">Email</label><br/>
            <div className="toggle">
            <input type="email" name="email"id="email" placeholder="Enter your email address" onChange={formik.handleChange} value={formik.values.email} />
            </div>
            {formik.errors.email ? <div>{formik.errors.email}</div>:null}
        </div>
        <div className="user">
            <label htmlFor="username" className="username">User-name</label><br/>
            <input type="text" name="username" id="username" placeholder="Enter your username" onChange={formik.handleChange} value={formik.values.username}/>
            {formik.errors.username ? <div>{formik.errors.username}</div>:null}
        </div>
        <div className="pass">
            <label htmlFor="password" className="password">Password</label><br/>
            <input type="password" name="password" id="password" placeholder="Enter your Password" onChange={formik.handleChange} value={formik.values.password}/> 
            {formik.errors.password ? <div>{formik.errors.password}</div>:null}
        </div>
        <div className="confirm-pass">
            <label htmlFor="password" className="password">Password</label><br/>
            <input type="password" name="confirmpassword"id="pasword" placeholder="Confirm your Password" onChange={formik.handleChange} value={formik.values.confirmpassword} /> 
            {formik.errors.confirmpassword ? <div>{formik.errors.confirmpassword}</div>:null}
        </div>
        <div className="Register">
            <button type="submit" id="Register">Register</button>
        </div>
    </form>
  );
}
