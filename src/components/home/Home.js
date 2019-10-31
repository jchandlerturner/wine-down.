import React, { Component } from 'react'
import WineManager from '../../modules/WineManager'
import WineCard from './WineCard'
import VarietalManager from '../../modules/VarietalManager';
import './Home.css'
import { parse } from 'url';


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
    console.log("home component is MOUNTED YO")
    console.log("this is what is in session storage when called on", parseInt(sessionStorage.getItem("userId")))
    WineManager.getUserWine("wines", parseInt(sessionStorage.getItem("userId"))).then(wines => {
      console.log("these are the wines returned in the fetch call", wines)
      
       this.setState({wines:wines})
    })
    .then(() => console.log(this.state))

}
  render() {
    console.log("home render is triggered")
    return (
      <>
      <section id="mainBody">
        <button type="button"
          className="btn"
          onClick={() => { this.props.history.push("/wines/new") }}>
          Add Wine
      </button>
        <div className="homeHead">
          <h3>your recent wines</h3>
        </div>
        <div className="cardContainer">
          {this.state.wines.map(wine =>
            <WineCard
              key={wine.id}
              myWine={wine}
              wineName={wine.name}
              deleteWine={this.deleteWine}
              wineId={wine.id}
              typeId={wine.type.id}
              {...this.props}
            />
          )}
        </div>
        </section>
      </>
      
    )
  }
}

export default Home