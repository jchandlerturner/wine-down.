import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {


    render() {
        return (
            <div className="navbar">
                <header>
                    <nav>
                        <ul className="container">
                            {(this.props.user) ?
                                <>
                                    <li><Link className="nav-link" to="/"><img id="homeIcon" src={require('./homeIcon-01.png')} alt="My Dog" /></Link></li>

                                    <li><Link className="nav-link" to="/browse"><img id="homeIcon" src={require('./searchIcon-01.png')} alt="My Dog" /></Link></li>
                                    
                                    <li><Link className="nav-link" to="/profile"><img id="homeIcon" src={require('./profileIcon-01.png')} alt="My Dog" /></Link></li>
                                </>
                                : <li><Link className="nav-link" to="/login">Login</Link></li>
                            }
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default withRouter(NavBar);
