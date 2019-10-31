import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import './Browse.css'


class BrowseList extends Component {
  render() {
    return (
      <div>
        <div className="headline">
          <h1>BROWSE<br></br> WINES</h1>
        </div>
        <section className="browseSection">
          <div className="topRow">
            <div className="reds" onClick={() => { this.props.history.push("/reds") }}><h3></h3></div>
            <div className="whites" onClick={() => { this.props.history.push("/whites") }}><h3></h3></div>
          </div>
          <div className="bottomRow">
            <div className="bubbles" onClick={() => { this.props.history.push("/bubbles") }}><h3></h3></div>
            <div className="rose" onClick={() => { this.props.history.push("/rose") }}><h3></h3></div>
          </div>
        </section>
      </div>
    )
  }
}

export default BrowseList