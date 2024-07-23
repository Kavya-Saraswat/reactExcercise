import React from "react";
import Information from "./Information";
import { Link } from 'react-router-dom';

export default function Textarea() {
  return (
    <section id="section2">
      <div className="Logininfo">
        <div>
          <h3 className="Signin">Sign in</h3>
        </div>
        <div className="para">
          <p>If you don't have an account register</p>
          <span>You can </span>
          <Link to="/Registration" id="Register-here">Register here!</Link>
        </div>
        <Information />
      </div>
      <div className="Socialinfo">
        <p>or continue with</p>
        <div>
          <i className="fa fa-facebook-square" id="fb"></i>
          <i className="fa fa-apple" id="apple"></i>
          <i className="fa fa-google" id="google"></i>
        </div>
      </div>
    </section>
  );
}
