import React, { Component } from 'react'

class ProfileList extends Component {

    handleLogout = () => {
        this.props.clearUser();
        this.props.history.push('/');
    }

    render() {
        return (
            <>
            <p>This is Profile</p>
            <button onClick={this.handleLogout}>Log Out</button>
            </>
    )
  }
}

export default ProfileList