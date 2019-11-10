import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import WineManager from '../../modules/WineManager'
import WineCard from '../home/WineCard'
import VarietalManager from '../../modules/VarietalManager';
import './Profile.css'

class ProfileList extends Component {
    state = {
        wines: [],
        loadingStatus: false
    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    // addWine = evt => {
    //     evt.preventDefault();
    //     if (this.state.name === "" || this.state.price === "") {
    //         window.alert("Please input a name and price");
    //     } else {
    //         this.setState({ loadingStatus: true });
    //         const wine = {
    //             name: this.state.name,
    //             price: this.state.price,
    //             tastingNotes: this.state.tastingNotes,
    //             starRating: this.state.starRating
    //         };

    //         WineManager.post(wine)
    //             .then(() => this.getWine());
    //     }

    // };
    deleteWine = id => {
        WineManager.delete(id)
            .then(() => {
                WineManager.getAll()
                    .then((newWines) => {
                        this.setState({
                            wines: newWines
                        })
                    })
            })
    }
    getWine = () => {
        WineManager.getAll()
            .then((wines) => {
                this.setState({
                    wines: wines
                })
            })
    }
    showTop = () => {
        if (this.state.wines.starRating > 3) {
            return (<p>working</p>)
        }
    }
    componentDidMount() {
        const newState = {}
        WineManager.getUserWine("wines", parseInt(sessionStorage.getItem("userId"))).then(wines => {
            newState.wines = wines
        })
            //Sort + grab sub zero//
            .then(() => {
                this.setState(newState)
            })

    }
    handleLogout = () => {
        this.props.clearUser();
        this.props.history.push('/');
    }

    render() {
        return (
            <>

                <button className="logoutButton" onClick={this.handleLogout}>Log Out</button>
                <div className="userBanner">
                    <h1>
                        Welcome {sessionStorage.getItem("name")}
                    </h1>
                </div>
                <div id="fiveStars">
                <Link className="nav-link" to="/1">One Star Wines</Link>
                <br></br>
                <Link className="nav-link" to="/2">Two Star Wines</Link>
                <br></br>
                <Link className="nav-link" to="/3">Three Star Wines</Link>
                <br></br>
                <Link className="nav-link" to="/4">Four Star Wines</Link>
                <br></br>
                <Link className="nav-link" to="/5">Five Star Wines</Link>
                </div>
            </>

        )
    }
}

export default withRouter(ProfileList);