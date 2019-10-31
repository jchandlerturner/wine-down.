import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EditWineForm from './EditWineForm'
import './WineCard.css'

class WineCard extends Component {

    cardDisplay = () => {
        if (this.props.myWine.typeId === 1) {
            return (<img id="cardIcon" src={require('./wineIconRed.png')} alt="My Dog" />
            )
        } else if (this.props.myWine.typeId=== 2) {
            return (<img id="cardIcon" src={require('./wineIconWhite-01.png')} alt="My Dog" />)
        } else if (this.props.myWine.typeId=== 4) {
            return (<img id="cardIcon" src={require('./wineIconRose-01.png')} alt="My Dog" />)
        } else if (this.props.myWine.typeId=== 3) {
            return (<img id="cardIcon" src={require('./wineIconBubbles-01.png')} alt="My Dog" />)
        } 

    }
    render() {
        return (
            <div className="mainCard">
                <div id="cardContent">
                    <div className="imageContainer">
                            {this.cardDisplay()}
                    </div>
                    <div className="textContent">
                        <p className="cardText"><strong>Name: </strong>{this.props.wineName}</p>
                        <p className="cardText"><strong>Price: </strong>{this.props.myWine.price}</p>
                        <p className="cardText"><strong>Rating: </strong>{this.props.myWine.starRating}</p>
                        <p className="cardText"><strong>Varietal: </strong>{this.props.myWine.varietal.varietal}</p>
                        <hr>
                        </hr>
                        <p className="cardText"><strong>Notes: </strong>{this.props.myWine.tastingNotes}</p>
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