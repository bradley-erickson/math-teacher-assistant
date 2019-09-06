import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import WelcomeScreen from './welcome.js';
import MainMenu from './main-menu.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.onStart = this.onStart.bind(this);
        this.state = {
            name: '',
            menu: false
        }
    }

    onStart(name) {
        this.setState({
            name,
            menu: !this.state.menu
        });
    }

    render() {
        const { name, menu } = this.state;
        return (
            <HashRouter basename='/'>
                <div>
                    <ul>
                        <li><Link to="/">Welcome</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={WelcomeScreen} />
                    <Route exact path="/about" component={About} />
                </div>
            </HashRouter>

        );
    }
}
const About = () => <div><h2>About</h2></div>

export default App;
