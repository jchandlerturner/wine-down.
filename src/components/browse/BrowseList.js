import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import './Browse.css'


class BrowseList extends Component {
  render() {
    return (
      <div>
        <div className="headline">
          <h1>BROWSE</h1>
          <h1>WINES</h1>
          <br></br>
        </div>
        <section className="browseSection">
          <div className="topRow">
            <div className="roseImgCenter" onClick={() => { this.props.history.push("/reds") }}><h3></h3><img id="wineIcon" src={require('./redDiv-01.png')} alt="My Dog" /></div>
            <div className="whites" onClick={() => { this.props.history.push("/whites") }}><h3></h3><img id="wineIcon" src={require('./whiteDiv-01.png')} alt="My Dog" /></div>
          </div>
          <div className="bottomRow">
            <div className="bubbles" onClick={() => { this.props.history.push("/bubbles") }}><h3></h3><img id="wineIcon" src={require('./bubblesDiv-01.png')} alt="My Dog" /></div>
            <div className="rose" onClick={() => { this.props.history.push("/rose") }}><h3></h3><img id="wineIcon" src={require('./roseDiv-01.png')} alt="My Dog" /></div>
          </div>
        </section>
      </div>
    )
  }
}

export default BrowseList