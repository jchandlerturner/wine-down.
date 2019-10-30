import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EditWineForm from './EditWineForm'
import './WineCard.css'

class WineCard extends Component {
    render() {
        return (
            <div className="mainCard">
                <div id="cardContent">
                    <div className="imageContainer">
                        <picture>
                        <img id="redCardIcon" src={require('./wineIconRed-01.png')} alt="My Dog" />
                        </picture>
                    </div>
                    <div className="textContent">
                        <p className="cardText"><strong>Name: </strong>{this.props.wineName}</p>
                        <p className="cardText"><strong>Price: </strong>{this.props.myWine.price}</p>
                        <p className="cardText"><strong>Type: </strong>{this.props.myWine.type.type}</p>
                        <p className="cardText"><strong>Varietal: </strong>{this.props.myWine.varietal.varietal}</p>
                        <div className="cardButtons">
                            <button type="button" className="editButton"
                                onClick={() => { this.props.history.push(`/wines/${this.props.myWine.id}/edit`) }}>Edit</button>
                            <button type="button" className="deleteButton" onClick={() => this.props.deleteWine(this.props.wineId)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default WineCard