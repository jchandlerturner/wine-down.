import React, { Component } from 'react';
import WineManager from '../../modules/WineManager';
import VarietalManager from '../../modules/VarietalManager'

class AddWineForm extends Component {
    state = {
        name: "",
        price: 0,
        tastingNotes: "",
        starRating: 0,
        varietals: [],
        types: [],
        userId: 0,
        varietal: 0
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log(stateToChange)
        console.log(this.state)
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
                price: this.state.price,
                tastingNotes: this.state.tastingNotes,
                starRating: this.state.starRating,
                varietal: this.state.varietal,
                type: this.state.types
            };

            WineManager.post(wine)
                .then(() => this.props.history.push("/wines"));
        }
    };
    componentDidMount() {
        VarietalManager.getAll()
            .then(varietals => {

                this.setState({
                    varietals: varietals
                });
            });
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
                            <textarea name="message" rows="10" cols="30">
                            </textarea>

                            <label htmlFor="Rating">Rating</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="rating"
                                placeholder="Rate your wine from 1-5"
                            />

                            <label htmlFor="Varietal">Varietal</label>
                            <select
                                defaultValue=""
                                name="varietals"
                                id="varietal"
                                onChange={this.handleFieldChange}>
                                <option>Varietal: </option>
                                {this.state.varietals.map(varietal =>
                                    <option className="var" key={varietal.id} id={varietal.varietal} value={varietal.id}>
                                        {varietal.varietal}
                                    </option>
                                )}
                            </select>

                            <label htmlFor="Type">Type</label>
                            <select name="type">
                                <option value="Red">Red</option>
                                <option value="White">White</option>
                                <option value="Bubbles">Bubbles</option>
                                <option value="Rose">Rosé</option>
                            </select>

                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.addWine}
                            >Add Wine</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default AddWineForm