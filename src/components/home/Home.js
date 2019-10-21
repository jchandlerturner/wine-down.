import React, { Component } from 'react'
import WineManager from '../../modules/WineManager'

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
  getWine = () => {
    WineManager.getAll()
      .then((wines) => {
        this.setState({
          wines: wines
        })
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
      </>
    )
  }
}

export default Home