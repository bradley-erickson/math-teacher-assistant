import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Header from '../shared/header.js';
import AdditionBackground from './addition-background.js';

class AdditionModule extends Component {
    constructor(props) {
        super(props);
        this.openBackground = this.openBackground.bind(this);
        this.openExample = this.openExample.bind(this);
        this.openPractice = this.openPractice.bind(this);
        this.openEndScreen = this.openEndScreen.bind(this);
        this.state = {
            page: '',
            background: true,
            example: false,
            practice: false,
            endScreen: false
        };
    }

    openBackground() {
        this.setState({
            background: true,
            example: false,
            practice: false,
            endScreen: false
        });
    }

    openExample() {
        this.setState({
            background: false,
            example: true,
            practice: false,
            endScreen: false
        });
    }

    openPractice() {
        this.setState({
            background: false,
            example: false,
            practice: true,
            endScreen: false
        });
    }

    openEndScreen() {
        this.setState({
            background: false,
            example: false,
            practice: false,
            endScreen: true
        });
    }

    render() {
        const { background, example, practice, endScreen } = this.state;
        return (
            <div className="module">
                <Header title="Addition Module" className="addition-header">
                    {!endScreen &&
                        <div>
                            <Button onClick={this.props.toggleHome}>
                                Home
                            </Button>
                            <Button onClick={this.props.toggleHome}>
                                Next
                            </Button>
                        </div>
                    }
                </Header>
                {background && <AdditionBackground nextModule={this.openExample} className="body-component"/>}
                {example && <div />}
                {practice && <div />}
            </div>
        );
    }
}

AdditionModule.propTypes = {
    name: PropTypes.string.isRequired,
    toggleHome: PropTypes.func.isRequired
}

export default AdditionModule;