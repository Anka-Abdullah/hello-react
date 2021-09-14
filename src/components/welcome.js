import React, {Component} from "react";

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        // const {a, b} = this.state
        return <h3>nama {name} sebagai {heroName}</h3>
    }
}

export default Welcome