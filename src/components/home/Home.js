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
    WineManager.getUserWine("wines", parseInt(sessionStorage.getItem("userId"))).then(wines => {
      
       this.setState({wines:wines})
    })

}
  render() {
    return (
      <>
      <section id="mainBody">
        <button type="button"
          className="addButton"
          onClick={() => { this.props.history.push("/wines/new") }}>
          Add Wine
      </button>
        <div className="homeHead">
          <h3 className="homeHeader">My Recent Wines</h3>
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