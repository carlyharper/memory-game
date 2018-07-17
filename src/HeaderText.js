import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class HeaderText extends Component {
    render () {
        return (
            <h1>{ this.props.h1Text }</h1>
        )
    }
}

export default HeaderText;