import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

class LoginPage extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>

        <button
          bsStyle="primary"
          className="btn-margin"
          onClick={this.goTo.bind(this, 'home')}
        >
          Home
        </button>
        {
          !isAuthenticated() && (
              <button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.login.bind(this)}
              >
                Log In
              </button>
            )
        }
        {
          isAuthenticated() && (
              <button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.logout.bind(this)}
              >
                Log Out
              </button>
            )
            }
      </div>
    );
  }
}

export default LoginPage;