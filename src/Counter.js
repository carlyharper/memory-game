import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            value: 0
        };
    };

    incrementCounter() {
        this.setState({
            value: this.state.value + 1
        });
    }

    render () {

        return (
            <div>
                <h1>{ this.state.value }</h1>
                <button onClick={ this.incrementCounter.bind(this) }>+</button>
            </div>
        );
    };
}

export default Counter;