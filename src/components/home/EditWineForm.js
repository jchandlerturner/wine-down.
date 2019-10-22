import React, { Component } from 'react';
import WineManager from '../../modules/WineManager';
import VarietalManager from '../../modules/VarietalManager'
import TypeManager from '../../modules/TypeManager'

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
        type: ""
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
            varietal: parseInt(this.state.varietal),
            type: parseInt(this.state.type),
            userId: this.activeUser
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
            .then(() => {
                this.setState(newState)
            })

    }

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">

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
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="starRating"
                                placeholder="Rate your wine from 1-5"
                            />

                            <label htmlFor="Varietal">Varietal: </label>
                            <select
                                defaultValue=""
                                name="varietals"
                                id="varietal"
                                onChange={this.handleFieldChange}>
                                {this.state.varietals.map(varietal =>
                                    <option className="var" key={varietal.id} id={varietal.varietal} value={varietal.id}>
                                        {varietal.varietal}
                                    </option>
                                )}
                            </select>

                            <label htmlFor="Type">Type: </label>
                            <select
                                defaultValue=""
                                name="types"
                                id="type"
                                onChange={this.handleFieldChange}>
                                {this.state.types.map(type =>
                                    <option className="var" key={type.id} id={type.type} value={type.id}>
                                        {type.type}
                                    </option>
                                )}
                            </select>

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
            </>
        )
    }
}

export default EditWineForm