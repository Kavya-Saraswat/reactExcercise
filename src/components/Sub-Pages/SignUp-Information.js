import React from "react";
import {useFormik} from 'formik';
import { signInSchema } from "./Formik1";
import '../../Stylesheets/SignUp-Info.css';


export default function SignUpInformation() {

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
            <div className="valid">
            {formik.errors.email ? <div>{formik.errors.email}</div>:null}
            </div>
        </div>
        <div className="user">
            <label htmlFor="username" className="username">User-name</label><br/>
            <input type="text" name="username" id="username" placeholder="Enter your username" onChange={formik.handleChange} value={formik.values.username}/>
            <div className="valid">
            {formik.errors.username ? <div>{formik.errors.username}</div>:null}
            </div>
        </div>
        <div className="pass">
            <label htmlFor="password" className="password">Password</label><br/>
            <input type="password" name="password" id="password" placeholder="Enter your Password" onChange={formik.handleChange} value={formik.values.password}/>
            <div className="valid"> 
            {formik.errors.password ? <div>{formik.errors.password}</div>:null}
            </div>
        </div>
        <div className="confirm-pass">
            <label htmlFor="password" className="password">Password</label><br/>
            <input type="password" name="confirmpassword"id="pasword" placeholder="Confirm your Password" onChange={formik.handleChange} value={formik.values.confirmpassword} />
            <div className="valid"> 
            {formik.errors.confirmpassword ? <div>{formik.errors.confirmpassword}</div>:null}
            </div>
        </div>
        <div className="Register">
            <button type="submit" id="Register">Register</button>
        </div>
    </form>
  );
}
