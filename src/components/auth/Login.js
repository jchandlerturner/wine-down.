import React, { Component } from "react"
import LoginManager from "../../modules/LoginManager";
import { Link, withRouter } from "react-router-dom"


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
                this.props.setUser(singleUser);
            } else {
                window.alert("User email and password do not match")
            }
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <fieldset>
                        <h3>Please log in</h3>
                        <div className="formgrid">
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
                        </div>
                        <button type="submit" className="submit">
                            Log in
                </button>
                    </fieldset>
                </form>
                {/* <Link className="nav-link" to="/signup">Not a member? Sign up here!</Link>  */}
            </div>
        )
    }
}

export default Login 