import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../shared/header.js';
import AdditionBackground from './addition-background.js';
import AdditionExample from './addition-example.js';
import AdditionPractice from './addition-practice.js';
import EndModule from '../shared/end-module.js';

class AdditionModule extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.state = {
            route: 'background'
        };
    }

    nextPage(text) {
        this.setState({ route: text });   
    }

    render() {
        const { route } = this.state;
        let routing;
        switch (route) {
            case('example'): routing = (<AdditionExample click={this.nextPage} />); break;
            case('practice'): routing = (<AdditionPractice click={this.nextPage} />); break;
            case('end'): routing = (<EndModule name={this.props.name} moduleType="addition" click={this.nextPage} />); break;
            default: routing = (<AdditionBackground click={this.nextPage}/>); break;
        }
        return (
            <div className="module">
                <Header title="Addition Module" className="addition-header">
                    {route !== 'end' ?
                        <Link to="/menu">
                            <Button>
                                Home
                            </Button>
                        </Link>
                        :
                        <span style={{ width: '10px' }} />
                    }
                </Header>
                {routing}
            </div>
        );
    }
}

AdditionModule.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}

export default AdditionModule;