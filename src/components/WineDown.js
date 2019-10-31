/* dashboard*/
import React, { Component } from "react";
import ApplicationViews from "../ApplicationViews";
import SignUp from './auth/SignUp'
import Login from './auth/Login'
import NavBar from './nav/NavBar'


class WineDown extends Component {
  state = {
    user: false,
    showSignUp: false,
    showLogin: true
  }
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }

  clearUser = () => {
    sessionStorage.clear()

    this.setState({
      user: this.isAuthenticated()
    });

  }
  componentDidMount() {
    this.setState({
      user: this.isAuthenticated()
    })
  }
  showSignUp=() => {
    this.setState({
      showSignUp: true
    })
  }
  showLogin=() => {
    this.setState({
      showSignUp: false
    })
  }

  render() {
    return (
      <React.Fragment>
        {(this.state.user) ?
          <>
            <NavBar user={this.state.user} clearUser={this.clearUser} />
            <ApplicationViews key={parseInt(sessionStorage.getItem("userId"))}clearUser={this.clearUser} />
          </>
          : <><div className="logRegContainer">
          {(this.state.showSignUp) ?
            <SignUp setUser={this.setUser} showLogin={this.showLogin}/>
            :<Login setUser={this.setUser} showSignUp={this.showSignUp}/> }
          </div>
          </>}
      </React.Fragment>
    );
  }
}

export default WineDown;