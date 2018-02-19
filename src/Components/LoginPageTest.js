
import React from 'react';
// import PropTypes from "prop-types";
//import styles from "../../../stylesheets/Layout/main.css";
//import Logo from './logo';

class LoginPage extends React.Component {

   onSignIn (googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is no
   }

   render() {

      return (
         <div>
            <div className="centered">
                <div className="g-signin2" data-onsuccess={this.onSignIn}></div>
            </div>
            <div>
               <p className="login-text">
                  Login with Google account
               </p>
            </div>
         </div>
      );
   }
}


export default LoginPage