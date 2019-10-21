import React, { Component } from "react"
import LoginManager from '../../modules/LoginManager'


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
            <form onSubmit={this.handleRegister}>
                <fieldset>
                    <h3>Sign Up!</h3>
                    <div className="formgrid">
                        <input onChange={this.handleFieldChange} type="name"
                            id="name"
                            placeholder="First Name"
                            required="" />
                        <label htmlFor="inputName">Name</label>

                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">Email address</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword">Password</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Confirm Password"
                            required="" />
                        <label htmlFor="inputPassword">Confirm Password</label>
                    </div>
                    <button type="submit" className="submit">
                        Sign Up
            </button>
                </fieldset>
            </form>
        )
    }


}

export default SignUp
