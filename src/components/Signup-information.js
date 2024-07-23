import React from "react";

export default function SignupInformation() {
  return (
    <form className="form">
        <div>
            <label htmlFor="email" className="email">Email</label><br/>
            <div className="toggle">
            <input type="email" id="email" placeholder="Enter your email address"/>
            </div>
        </div>
        <div className="user">
            <label htmlFor="username" className="username">User-name</label><br/>
            <input type="text" id="username" placeholder="Enter your username" /> 
        </div>
        <div className="pass">
            <label htmlFor="password" className="password">Password</label><br/>
            <input type="password" id="password" placeholder="Enter your Password" /> 
        </div>
        <div className="confirm-pass">
            <label htmlFor="password" className="password">Password</label><br/>
            <input type="password" id="password" placeholder="Confirm your Password" /> 
        </div>
        <div className="Register">
            <button type="submit" id="Register">Register</button>
        </div>
    </form>
  );
}
