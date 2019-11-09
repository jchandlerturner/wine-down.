import React, { Component } from 'react';
import WineManager from '../../modules/WineManager';
import VarietalManager from '../../modules/VarietalManager'
import TypeManager from '../../modules/TypeManager'
import Rating from "react-rating"
import './WineCard.css'

class AddWineForm extends Component {
    state = {
        name: "",
        price: 0,
        tastingNotes: "",
        starRating: "",
        varietals: [],
        types: [],
        userId: "",
        varietal: "",
        type: "",
        id: "",
    }
    activeUser = parseInt(sessionStorage.getItem("userId"))

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    addWine = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.price === "") {
            window.alert("Please input a name and price");
        } else {
            this.setState({ loadingStatus: true });
            const wine = {
                name: this.state.name,
                price: parseFloat(this.state.price),
                tastingNotes: this.state.tastingNotes,
                starRating: parseInt(this.state.starRating),
                varietalId: parseInt(this.state.varietal),
                typeId: parseInt(this.state.type),
                userId: this.activeUser,
                id: this.state.id
            };

            WineManager.post(wine)
                .then(() => this.props.history.push("/"));
        }
    };

    componentDidMount() {
        const newState = {}
        VarietalManager.getAll().then(varietals => {
            newState.varietals = varietals
        })
            .then(() =>
                TypeManager.getAll().then(types => {
                    newState.types = types
                })
            )
            .then(() => {
                this.setState(newState)
            })

    }
    render() {

        return (
            <>
                <section className="editBody">
                    <div className="editCardContent">
                        <form>
                            <fieldset>
                                <div className="editForm">

                                    <label htmlFor="wineName">Name</label>
                                    <input
                                        type="text"
                                        required
                                        onChange={this.handleFieldChange}
                                        id="name"
                                        placeholder="Wine Name"
                                    />

                                    <label htmlFor="price">Price</label>
                                    <input
                                        type="text"
                                        required
                                        onChange={this.handleFieldChange}
                                        id="price"
                                        placeholder="Price"
                                    />

                                    <label htmlFor="Tasting Notes">Tasting Notes</label>
                                    <textarea id="tastingNotes" onChange={this.handleFieldChange} name="message" rows="10" cols="30">
                                    </textarea>

                                    <label htmlFor="Rating">Rating</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        required
                                        onChange={this.handleFieldChange}
                                        id="starRating"
                                        placeholder="Rate your wine from 1-5"
                                    />
                                    {/* <Rating /> */}
                                    <br></br>
                                    <label htmlFor="Varietal">Varietal: </label>
                                    <select
                                        name="varietals"
                                        id="varietal"
                                        onChange={this.handleFieldChange}>
                                        <option>Select Varietal</option>
                                        {this.state.varietals.map(varietal =>
                                            <option key={varietal.id} id={varietal.varietal} value={varietal.id}>
                                                {varietal.varietal}
                                            </option>
                                        )}
                                    </select>
                                    <br></br>
                                    <label htmlFor="Type">Type: </label>
                                    <select
                                        name="types"
                                        id="type"
                                        onChange={this.handleFieldChange}>
                                        <option>Select Wine Type</option>
                                        {this.state.types.map(type =>
                                            <option key={type.id} id={type.type} value={type.id}>
                                                {type.type}
                                            </option>
                                        )}
                                    </select>

                                </div>
                                <div className="alignRight">
                                    <button id="cardAddButton"
                                        type="button"
                                        disabled={this.state.loadingStatus}
                                        onClick={this.addWine}
                                    >Add Wine</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </section>
            </>
        )
    }
}

export default AddWineForm