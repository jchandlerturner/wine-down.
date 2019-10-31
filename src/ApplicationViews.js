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

export default class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home  {...props} />
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
            </React.Fragment>
        );
    }
}
