import React, { Component } from 'react'
// import { Link, withRouter } from "react-router-dom"
import TypeCard from './TypeCard'
import WineManager from '../../modules/WineManager'
import '../home/WineCard.css'

class WhiteList extends Component {
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
        WineManager.getRed(parseInt(sessionStorage.getItem("userId")))
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
    WineManager.getRed(parseInt(sessionStorage.getItem("userId"))).then(wines => {
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
        <img id="homeIcon" onClick={() => { this.props.history.push("/browse") }} src={require('../auth/backIcon-01.png')} alt="My Dog" />
        <div className="headline">
          <h1>RED
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

export default WhiteList