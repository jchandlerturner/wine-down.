import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import EditWineForm from './EditWineForm'
import '../home/WineCard.css'

class TypeCard extends Component {

    cardDisplay = () => {
        if (this.props.myWine.typeId === 1) {
            return (<img id="cardIcon" src={require('./wineIconRed.png')} alt="My Dog" />
            )
        } else if (this.props.myWine.typeId=== 2) {
            return (<img id="cardIcon" src={require('./wineIconWhite-01.png')} alt="My Dog" />)
        } else if (this.props.myWine.typeId=== 4) {
            return (<img id="cardIcon" src={require('./wineIconRose.png')} alt="My Dog" />)
        } else if (this.props.myWine.typeId=== 3) {
            return (<img id="cardIcon" src={require('./wineIconBubbles2.png')} alt="My Dog" />)
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
                        <p className="cardText"><strong>NAME: </strong>{this.props.wineName}</p>
                        <p className="cardText"><strong>PRICE: </strong>{this.props.myWine.price}</p>
                        <p className="cardText"><strong>RATING: </strong>{this.props.myWine.starRating}</p>
                        <p className="cardText"><strong>VARIETAL: </strong>{this.props.myWine.varietal.varietal}</p>
                        <hr>
                        </hr>
                        <p className="cardText"><strong className="cardStrong">NOTES: </strong>{this.props.myWine.tastingNotes}</p>
                    <button type="button" className="editButton"
                        onClick={() => { this.props.history.push(`/wines/${this.props.myWine.id}/edit`) }}>Edit</button>
                    <button type="button" className="deleteButton" onClick={() => this.props.deleteWine(this.props.wineId)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default TypeCard