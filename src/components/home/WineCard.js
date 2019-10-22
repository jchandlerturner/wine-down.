import React, { Component } from 'react';
import { Link } from "react-router-dom";

class WineCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="cardContent">
                    <picture>
                        <p>wine img</p>
                    </picture>
                    <p><strong className="wineName">Name: </strong>{this.props.wineName}</p>
                    <p><strong>Price: </strong>{this.props.myWine.price}</p>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/wines/${this.props.myWine.id}/edit`) }}>Edit</button>
                    <button type="button" onClick={() => this.props.deleteWine(this.props.myWine.id)}>Delete</button>
                </div>
            </div>
        );
    }
}
export default WineCard