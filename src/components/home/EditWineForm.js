import React, { Component } from 'react';
import WineManager from '../../modules/WineManager';
import VarietalManager from '../../modules/VarietalManager'
import TypeManager from '../../modules/TypeManager'
import './WineCard.css'


class EditWineForm extends Component {
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
        currentWine: {}
    };

    activeUser = parseInt(sessionStorage.getItem("userId"))

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateWine = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedWines = {
            name: this.state.name,
            price: parseFloat(this.state.price),
            tastingNotes: this.state.tastingNotes,
            starRating: parseInt(this.state.starRating),
            varietalId: parseInt(this.state.varietal),
            typeId: parseInt(this.state.type),
            userId: this.activeUser,
            id: this.state.id
        };

        WineManager.update(editedWines)
            .then(() => this.props.history.push("/"))
    }

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
            .then(() =>
                WineManager.get(this.props.match.params.winesId).then(wine => {
                 newState.currentWine = wine
                 newState.name= wine.name
                 newState.id = wine.id
                 newState.varietal = wine.varietalId
                 newState.type = wine.typeId
                 newState.userId = wine.userId
                 newState.tastingNotes = wine.tastingNotes
                 newState.starRating = wine.starRating

                })
            )
            .then(() => {
                this.setState(newState)
            })


    }

    render() {
        console.log(this.state.currentWine)
        return (
            <>
            <div className="editCardContent">
                <form>
                    <fieldset>
                        <div className="formGrid">

                            <label htmlFor="wineName">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="Wine Name"
                                defaultValue={this.state.currentWine.name}
                            />

                            <label htmlFor="price">Price</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="price"
                                placeholder="Price"
                                defaultValue={this.state.currentWine.price}
                            />

                            <label htmlFor="Tasting Notes">Tasting Notes</label>
                            <textarea id="tastingNotes" onChange={this.handleFieldChange} defaultValue={this.state.currentWine.tastingNotes} name="message" rows="10" cols="30">
                            </textarea>

                            <label htmlFor="Rating">Rating</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="starRating"
                                placeholder="Rate your wine from 1-5"
                                defaultValue={this.state.currentWine.starRating}
                            />


                            {this.state.varietals.length > 0 ?
                            <>
                                <label htmlFor="Varietal">Varietal: </label>
                            <select
                                defaultValue={this.state.currentWine.varietalId}
                                name="varietals"
                                id="varietal"
                                onChange={this.handleFieldChange}>
                                {this.state.varietals.map(varietal =>
                                    <option className="var" key={varietal.id} id={varietal.varietal} value={varietal.id} >
                                        {varietal.varietal}
                                    </option>
                                )}
                            </select>

                            <label htmlFor="Type">Type: </label>
                            <select
                                defaultValue={this.state.currentWine.typeId}
                                name="types"
                                id="type"
                                onChange={this.handleFieldChange}>
                                {this.state.types.map(type =>
                                    <option className="var" key={type.id} id={type.type} value={type.id}>
                                        {type.type}
                                    </option>
                                )}
                            </select>
                            </>
                            :""
                            }

                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateWine}
                            >Save Changes</button>
                        </div>
                    </fieldset>
                </form>
                </div>
            </>
        )
    }
}

export default EditWineForm