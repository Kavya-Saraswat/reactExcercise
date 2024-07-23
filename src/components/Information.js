import React from "react"

export default function Information() {
  return (
    <form className="form">
        <div>
            <label htmlFor="email" className="email">Email</label><br/>
            <input type="email" id="email" placeholder="Enter your email address"/>
        </div>
        <div className="pass">
            <label htmlFor="password" className="password">Password</label><br/>
            <input type="password" id="password" placeholder="Enter your Password" /> 
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
