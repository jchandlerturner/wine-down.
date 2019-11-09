import React, { Component } from "react"
import LoginManager from "../../modules/LoginManager";
// import { Link, withRouter } from "react-router-dom"
import './Login.css'



class Login extends Component {

    // Set initial state

    state = {
        email: "",
        password: "",
        id: "",
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = (e) => {
        e.preventDefault()
        LoginManager.getUserData("users").then((users) => {
            let singleUser = users.find(
                user =>
                    user.password.toLowerCase() === this.state.password.toLowerCase() &&
                    user.email.toLowerCase() === this.state.email.toLowerCase()
            );
            if (this.state.email === "") {
                window.alert("Please enter email")
            } else if (this.state.password === "") {
                window.alert("Please enter password")
            } else if (singleUser) {
                sessionStorage.setItem("userId", singleUser.id);
                sessionStorage.setItem("email", this.state.email);
                sessionStorage.setItem("name", this.state.name);
                this.props.setUser(singleUser);
            } else {
                window.alert("User email and password do not match")
            }
        })

    }

    render() {
        return (
            <section className="loginBody">
                <div className="logoContainer">
                    <img id="mainLogo" src={require('./logoWD-01.png')} alt="My Dog" />
                </div>
                <form onSubmit={this.handleLogin}>
                    <fieldset> 
                        <div className="loginForm">
                            <p>Email: </p>
                            <input onChange={this.handleFieldChange} type="email"
                                id="email"
                                placeholder=""
                                required="" autoFocus="" />
                            <p>Password: </p>
                            <input onChange={this.handleFieldChange} type="password"
                                id="password"
                                placeholder=""
                                required="" />
                        </div>
                        <button type="submit" className="loginButton">
                            Log in
                </button>
                <button className="signupButton" onClick={this.props.showSignUp}>Not a member? Sign up here!</button>
                    </fieldset>
                </form>
            </section>
        )
    }
}

export default Login 