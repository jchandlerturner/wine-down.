import React, { Component } from "react"
import LoginManager from '../../modules/LoginManager'
import './SignUp.css'


class SignUp extends Component {

    // Set initial state
    state = {
        name: "",
        email: "",
        password: "",
    };

    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    handleRegister = (e) => {
        e.preventDefault()
        LoginManager.getUserData().then((users) => {
            let validate = users.find(user => user.email.toLowerCase() === this.state.email.toLowerCase())

            if (this.state.name === "") {
                window.alert("Please enter a name")
            } else if (this.state.email === "") {
                window.alert("Please enter an email address")
            } else if (this.state.password === "") {
                window.alert("Please enter a password")
            } else if (validate) {
                window.alert("Email address already exists")
            } else {
                let newUser = {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                };
                LoginManager.createUser(newUser)
                    .then((createdUser) => {
                        //This determines which page you land on upon registration
                        this.props.setUser(createdUser)
                    }
                    )
            }
        }
        )
    }

    render() {
        return (
            <section id="signupBody">
            <img id="homeIcon" onClick={this.props.showLogin} src={require('./backIcon-01.png')} alt="My Dog" />
            <form id="signupContainer" onSubmit={this.handleRegister}>
                <fieldset>
                    <div className="signDiv">
                    <h3>Sign Up!</h3>
                    </div>
                    <div className="SignupForm">
                        <p>Email Address: </p>
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder=""
                            required="" autoFocus="" />

                        <p>Name: </p>
                        <input onChange={this.handleFieldChange} type="name"
                            id="name"
                            placeholder=""
                            required="" />

                        <p>Password: </p>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder=""
                            required="" />

                        <p>Confirm Password: </p>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder=""
                            required="" />
                    </div>
                    <button type="submit" className="reallySignUp">
                        Sign Up
            </button>
                </fieldset>
            </form>
            </section>
        )
    }


}

export default SignUp
