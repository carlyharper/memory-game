import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class RenderingState extends Component {

    constructor() {
        super();
        this.state = {
            cats: 5,
            dogs: 2
        };
    };

    render () {

        return (
            <div className='RenderingState'>
                <h1>You have {this.state.cats} cats and {this.state.dogs}, therefore you are a {this.state.dogs > this.state.cats ? 'dog' : 'cat'} person.</h1>
            </div>
        );
    };
}

export default RenderingState;