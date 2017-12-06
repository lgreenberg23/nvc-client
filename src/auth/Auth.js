import auth0 from 'auth0-js';
import history from '../history';
import { AUTH_CONFIG } from './auth0-variables';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'id_token token',
    scope: 'openid'//,
    // nonce: randomString(16)
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/categories');
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/home');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  // function randomString(length) {
  //   var bytes = new Uint8Array(length);
  //   var random = window.crypto.getRandomValues(bytes);
  //   var result = [];
  //   var charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~'
  //   random.forEach(function (c) {
  //       result.push(charset[c % charset.length]);
  //   });
  //   window.localStorage.setItem('nonce', randomString(16));
  //   return result.join('');
  // }
}


/*




var jwt = '...'; // validated and decoded ID token body
if (jwt.nonce === window.localStorage.getItem('nonce')) {
    // Nonce is OK
} else {
    // Nonce is not OK! Token replay attack might be underway
}


<a href="https://backapi.auth0.com/authorize?scope=appointments%20
contacts&audience=appointments:api&response_type=id_token%20token&
client_id=V6jejsIB8khFOJwwdnox0pC3rRZoTSSz&
redirect_uri=https://YOUR_APP/callback&nonce=12345789">
  Sign In
</a>

*/