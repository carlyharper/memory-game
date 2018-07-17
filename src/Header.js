import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HeaderText from './HeaderText.js';

class Header extends Component {
    render () {
        return (
            <div>
                <HeaderText h1Text='this is the first header' />
                <HeaderText h1Text='this is second' />
                <HeaderText h1Text='this is third' />
            </div>
        )
    }
}

export default Header;