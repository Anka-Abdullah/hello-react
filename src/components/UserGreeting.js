import React, { Component } from 'react'

// conditional rendering course

export class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {
        const message = this.state.isLoggedIn ? <div>Welcome Admin</div> : <div>Welcome Guest</div>
        return (
            <div>
                {message}
            </div>
        )
        //or return this.state.isLoggedIn && <div>Welcome Admin</div>
    }
}

export default UserGreeting
