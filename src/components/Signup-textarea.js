import React from 'react';
import SignupInformation from './Signup-information';


export default function Signuptextarea() {
  return (
    <section id="section2">
        <div class="Logininfo">
            <div>
                <h3 class="Signin">Sign up</h3>
            </div>
            <div class="para">
                <p>If you have an account register</p>
                <span>You can </span><a href="Signin.html" id="Register-here">Login here!</a>
            </div>
            <SignupInformation/>
        </div>
    </section>
  )
}
