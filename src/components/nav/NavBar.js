import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {


    render() {
        return (
            <header>
                <nav>
                    <ul className="container">
                        {(this.props.user) ?
                            <>
                                <li><Link className="nav-link" to="/">Home</Link></li>
                                <li><Link className="nav-link" to="/browse">Browse</Link></li>
                                <li><Link className="nav-link" to="/profile">Profile</Link></li>
                            </>
                            : <li><Link className="nav-link" to="/login">Login</Link></li>
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(NavBar);
