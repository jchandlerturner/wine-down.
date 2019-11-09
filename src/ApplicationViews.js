import { Route } from "react-router-dom"
import React, { Component } from "react";
import Home from './components/home/Home'
import BrowseList from './components/browse/BrowseList'
import ProfileList from './components/profile/ProfileList'
import SignUp from './components/auth/SignUp'
import AddWineForm from "./components/home/AddWineForm";
import EditWineForm from "./components/home/EditWineForm";
import RedList from './components/browse/RedList'
import WhiteList from './components/browse/WhiteList'
import BubblesList from './components/browse/BubblesList'
import RoseList from './components/browse/RoseList'
import Login from "./components/auth/Login";
import OneStar from './components/profile/OneStar'
import TwoStar from './components/profile/TwoStar'
import ThreeStar from './components/profile/ThreeStar'
import FourStar from './components/profile/FourStar'
import FiveStar from './components/profile/FiveStar'


export default class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home key={parseInt(sessionStorage.getItem("userId"))} {...props} />
                }} />
                <Route exact path="/login" render={(props) => {
                    return <Login  {...props} />
                }} />
                <Route exact path="/signup" render={(props) => {
                    return <SignUp {...props} />
                }} />
                <Route exact path="/browse" render={(props) => {
                    return <BrowseList  {...props} />
                }} />
                <Route exact path="/profile" render={(props) => {
                    return <ProfileList clearUser={this.props.clearUser} {...props} />
                }} />
                <Route path="/wines/new" render={(props) => {
                    return <AddWineForm {...props} />
                }} />
                <Route path="/wines/:winesId(\d+)/edit" render={(props) => {
                    return <EditWineForm {...props} />
                }} />
                <Route exact path="/reds" render={(props) => {
                    return <RedList {...props} />
                }} />
                <Route exact path="/whites" render={(props) => {
                    return <WhiteList {...props} />
                }} />
                <Route exact path="/bubbles" render={(props) => {
                    return <BubblesList {...props} />
                }} />
                <Route exact path="/rose" render={(props) => {
                    return <RoseList {...props} />
                }} />
                <Route exact path="/1" render={(props) => {
                    return <OneStar {...props} />
                }} />
                <Route exact path="/2" render={(props) => {
                    return <TwoStar {...props} />
                }} />
                <Route exact path="/3" render={(props) => {
                    return <ThreeStar {...props} />
                }} />
                <Route exact path="/4" render={(props) => {
                    return <FourStar {...props} />
                }} />
                <Route exact path="/5" render={(props) => {
                    return <FiveStar {...props} />
                }} />
            </React.Fragment>
        );
    }
}
