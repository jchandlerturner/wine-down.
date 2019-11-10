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
                <section id="starsContainer">
                    <div className="starsCard">
                        <div className="starsCardContent">
                            <Link className="nav-link" to="/1"><img id="oneStar" src={require('./RatingGraphic-01.png')} alt="My Dog" /></Link>
                        </div>
                    </div>
                    <br></br>
                    <div className="starsCard">
                        <div className="starsCardContent">
                        <Link className="nav-link" to="/2"><img id="oneStar" src={require('./RatingGraphic2-01.png')} alt="My Dog" /></Link>
                        </div>
                    </div>
                    <br></br>
                    <div className="starsCard">
                        <div className="starsCardContent">
                        <Link className="nav-link" to="/3"><img id="oneStar" src={require('./RatingGraphic3-01.png')} alt="My Dog" /></Link>
                        </div>
                    </div>
                    <br></br>
                    <div className="starsCard">
                        <div className="starsCardContent">
                        <Link className="nav-link" to="/4"><img id="oneStar" src={require('./RatingGraphic4-01.png')} alt="My Dog" /></Link>
                        </div>
                    </div>
                    <br></br>
                    <div className="starsCardLast">
                        <div className="starsCardContent">
                        <Link className="nav-link" to="/5"><img id="oneStar" src={require('./RatingGraphic5-01.png')} alt="My Dog" /></Link>
                        </div>
                    </div>
                </section>
            </>

        )
    }
}

export default withRouter(ProfileList);