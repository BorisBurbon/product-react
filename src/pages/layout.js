import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../components/nav';

class App extends Component {
    checkLogin() {
        const user = this.props.user;
        if (user.auth){
            return (!user.pending && !user.error && user.auth.success);
        } else {
            return false;
        }
    }

    render() {
        return (
            <div>
                <Nav logged={ this.checkLogin() } username={ this.props.user.username } />
                {this.props.children}
            </div>
        );
    }
}

function select(state) {
    return state
}

export default connect(select)(App);
