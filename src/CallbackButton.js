import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CallbackButtonFunction from './CallbackButtonFunction.js';

class CallbackButton extends Component {

    render () {
        return (
            <div>
                <CallbackButtonFunction callbackButton={ ()=>{console.log('one')} } />
                <CallbackButtonFunction callbackButton={ ()=>{console.log('two')} } />
            </div>
        )
    }
}

export default CallbackButton;