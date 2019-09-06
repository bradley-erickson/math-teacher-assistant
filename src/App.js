import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import WelcomeScreen from './welcome.js';
import MainMenu from './main-menu.js';
import './App.css';
import AdditionModule from './addition/addition-module.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.onStart = this.onStart.bind(this);
        this.state = {
            name: ''
        }
    }

    onStart(name) {
        this.setState({ name });
    }

    render() {
        const { name } = this.state;
        const routes = ['background', 'example', 'practice', 'end'];
        return (
            <HashRouter basename='/'>
                <Route exact path="/" component={() => <WelcomeScreen onStart={this.onStart} />} />
                <Route exact path="/menu" component={MainMenu} />
                <Route exact path="/addition/:type" component={() => <AdditionModule data={routes} />} />
            </HashRouter>

        );
    }
}

export default App;
