import React, { Component } from 'react'
import WineManager from '../../modules/WineManager'
import WineCard from './WineCard'
import VarietalManager from '../../modules/VarietalManager';

class Home extends Component {
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

  componentDidMount() {
    const newState = {}
    WineManager.getAll().then(wines => {
        newState.wines = wines
    })
    //Sort + grab sub zero//
        .then(() => {
            this.setState(newState)
        })

}
  render() {
    return (
      <>
        <p>This is home</p>
        <button type="button"
          className="btn"
          onClick={() => { this.props.history.push("/wines/new") }}>
          Add Wine
      </button>
        <button type="button"
          className="btn"
          onClick={() => { this.props.history.push("/wines/edit") }}>
          Edit Wine
      </button>
        <div className="cardContainer">
          {this.state.wines.map(wine =>
            <WineCard
              key={wine.id}
              myWine={wine}
              wineName={wine.name}
              deleteWine={this.deleteWine}
              {...this.props}
            />
          )}
        </div>
      </>
    )
  }
}

export default Home