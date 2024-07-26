import React from "react";
import { useFormik } from 'formik';
import { signUpSchema } from "./formik";

export default function Information() {
    
    const  formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        
        validationSchema: signUpSchema,

        onSubmit: values => {
            console.log("Form data", values);
        }
});


    return (
        
        <form className="form" onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email" className="email">Email</label><br/>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <div className="valid">
                {formik.errors.email ? <div>{formik.errors.email}</div>:null}
                </div>
            </div>

            <div className="pass">
                <label htmlFor="password" className="password">Password</label><br/>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <div className="valid">
                {formik.errors.password ? <div>{formik.errors.password}</div>:null}
                </div>
            </div>

            <div className="remember-forgot">
                <div>
                    <label htmlFor="rememberme">Remember me</label>
                    <input type="checkbox" id="rememberme"/>
                </div>
                <div className="forgot-password">
                    <a href="forgot-password.html">Forgot Password?</a>
                </div>
            </div>

            <div className="Login">
                <button type="submit" id="Login">Login</button>
            </div>
        </form>
    );
}
