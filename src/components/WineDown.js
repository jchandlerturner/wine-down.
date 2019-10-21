/* dashboard*/
import React, { Component } from "react";
import ApplicationViews from "../ApplicationViews";
// import SignUp from './auth/SignUp'
import Login from './auth/Login'


class WineDown extends Component {
  state = {
    user: false
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

  render() {
    return (
      <React.Fragment>
      {(this.state.user) ?
        <>
        <ApplicationViews />
        </>
       :<><div className="logRegContainer">
         <Login setUser={this.setUser}/>
       {/* <SignUp setUser={this.setUser} /> */}
       </div>
       </>}
      </React.Fragment>
    );
  }
}

export default WineDown;