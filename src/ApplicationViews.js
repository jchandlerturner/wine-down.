import { Route } from "react-router-dom"
import React, { Component } from "react";
import Home from './components/home/Home'
import BrowseList from './components/browse/BrowseList'
import ProfileList from './components/profile/ProfileList'
import SignUp from './components/auth/SignUp'
import AddWineForm from "./components/home/AddWineForm";
import EditWineForm from "./components/home/EditWineForm";

export default class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home  {...props}/>
                }} />
                <Route exact path="/signup" render={(props) => {
                    return <SignUp {...props} />
                }} />
                <Route exact path="/browse" render={(props) => {
                    return <BrowseList  {...props}/>
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
            </React.Fragment>
        );
    }
}
