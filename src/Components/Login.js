import React from 'react'
import { GoogleLogin } from 'react-google-login-component';
//import Authenticate from '../actions/authActions'

class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
        <GoogleLogin socialId="968864608922-gho0t3dldra594n81i6cksdgo4sd7k09.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default Login;

// class Login extends React.Component{

// 	onSignIn = (googleUser) => {
// 	  var profile = googleUser.getBasicProfile();
// 	  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
// 	  console.log('Name: ' + profile.getName());
// 	  console.log('Image URL: ' + profile.getImageUrl());
// 	  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// 	}

// 	render(){
// 		return(
// 			<div className="g-signin2" data-onsuccess={this.onSignIn}></div>

// 		)
// 	}
// }

// export default Login


