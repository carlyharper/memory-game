import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import MemoryGame from './MemoryGame.js';
import Jobs from './Jobs.js';
import RenderingState from './RenderingState.js';
import Counter from './Counter.js';
import Poker from './Poker.js';
import Header from './Header.js';
import CallbackButton from './CallbackButton.js';

class App extends Component {
    render () {
        return (
            <div>
                <div className='navbar'>
                    <Link to='/memory'>Memory Game</Link>
                    <Link to='/jobs'>Jobs</Link>
                    <Link to='/renderingstate'>RenderingState</Link>
                    <Link to='/counter'>Counter</Link>
                    <Link to='/poker'>Poker</Link>
                    <Link to='/header'>Header</Link>
                    <Link to='/callbackbutton'>CallbackButton</Link>
                </div>
                <Switch>
                    <Route path='/memory' component={MemoryGame} />
                    <Route path='/jobs' component={Jobs} />
                    {/* <Route path='/' component={MemoryGame} /> */}
                    <Route path='/renderingstate' component={RenderingState} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/poker' component={Poker} />
                    <Route path='/header' component={Header} />
                    <Route path='/callbackbutton' component={CallbackButton} />
                </Switch>
            </div>
        );
    };
};

export default App;