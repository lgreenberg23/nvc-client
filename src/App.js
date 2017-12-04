import React, { Component } from 'react'
import './App.css'
import Categories from './Components/Categories'
// import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
// import Container from './Components/Container'
//import Login from './Components/Login'
//import LoginPage from './Components/LoginPageTest'
import Auth from './auth/Auth.js'


class App extends Component {
  
  // const auth = new Auth()
  // auth.login()

  goTo = (route) => this.props.history.replace(`/${route}`)

  login = () => this.props.auth.login()

  logout = () => this.props.auth.logout()

  render() {
    const { isAuthenticated } = this.props.auth

    return (
      <div>

        <button
          className="btn-margin"
          onClick={this.goTo.bind(this, 'categories')}
        >
          Home
        </button>
        {
          !isAuthenticated() && (
              <button
                className="btn-margin"
                onClick={this.login}
              >
                Log In
              </button>
            )
        }
        {
          isAuthenticated() && (
              <button
                className="btn-margin"
                onClick={this.logout}
              >
                Log Out
              </button>
            )
            }
      </div>
    )
  }

}


// export default App

export default withRouter(App)

// render() {
    // return (
    //   <LoginPage/>
    // );
//}
        // <Route path='/' component={authenticated(Container)}/>
      // <div >
          // <Route exact path="/login" component={Login}/>
      // </div>
