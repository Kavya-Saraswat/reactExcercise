import React from 'react';
import Information from './Information';
import { Link } from 'react-router-dom';


export default function Signuptextarea() {
  return (
    <section id="section2">
        <div class="Logininfo">
            <div>
                <h3 class="Signin">Sign up</h3>
            </div>
            <div class="para">
                <p>If you have an account register</p>
                <span>You can </span>
                <Link to="/" id="Register-here">Login here!</Link>
            </div>
            <Information/>
        </div>
    </section>
  )
}
