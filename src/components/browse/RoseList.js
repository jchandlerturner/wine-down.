import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import TypeCard from './TypeCard'
import WineManager from '../../modules/WineManager'


class RedList extends Component {
  state = {
    wines: [],
    loadingStatus: false
  }
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  deleteWine = id => {
    WineManager.delete(id)
      .then(() => {
        WineManager.getRose(parseInt(sessionStorage.getItem("userId")))
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
    WineManager.getRose(parseInt(sessionStorage.getItem("userId"))).then(wines => {
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
      <div className="headline">
        <br></br>
        <br></br>
        <h1>ROSE<br>
        </br>
          WINES
        </h1>
        <br></br>
        </div>
        <div className="cardContainer">
          {this.state.wines.map(wine =>
            <TypeCard
              key={wine.id}
              myWine={wine}
              wineName={wine.name}
              deleteWine={this.deleteWine}
              wineId={wine.id}
              {...this.props}
            />
          )}
        </div>
      </>
    )
  }
}

export default RedList