import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class CallbackButtonFunction extends Component {

    render () {
        return (
            <button onClick={ this.props.callbackButton }>Button</button>
        )
    }
}

export default CallbackButtonFunction;