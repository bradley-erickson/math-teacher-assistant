import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import AdditionModule from './addition/addition-module.js';

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.openMenu = this.openMenu.bind(this);
        this.openAdditionModule = this.openAdditionModule.bind(this);
        this.openSubtractionModule = this.openSubtractionModule.bind(this);
        this.openMultiplicationModule = this.openMultiplicationModule.bind(this);
        this.openDivisionModule = this.openDivisionModule.bind(this);
        this.state = {
            menu: true,
            addition: false,
            subtraction: false,
            multiplication: false,
            division: false
        };
    }

    openMenu() {
        this.setState({
            menu: true,
            addition: false,
            subtraction: false,
            multiplication: false,
            division: false
        });
    }

    openAdditionModule() {
        this.setState({
            menu: false,
            addition: true,
            subtraction: false,
            multiplication: false,
            division: false
        });
    }

    openSubtractionModule() {
        this.setState({
            menu: false,
            addition: false,
            subtraction: true,
            multiplication: false,
            division: false
        });
    }

    openMultiplicationModule() {
        this.setState({
            menu: false,
            addition: false,
            subtraction: false,
            multiplication: true,
            division: false
        });
    }

    openDivisionModule() {
        this.setState({
            menu: false,
            addition: false,
            subtraction: false,
            multiplication: false,
            division: true
        });
    }

    render() {
        const { name } = this.props;
        const {
            menu, addition, subtraction, multiplication, division
        } = this.state;
        return (
            <div>
                {menu &&
                    <div className="menu">
                        <div>
                            Hello, {this.props.name}!
                            <br />
                            What do you need help with?
                        </div>
                        <div>
                            <Button onClick={this.openAdditionModule}>
                                + Addition
                            </Button>
                            <Button onClick={this.openSubtractionModule}>
                                - Subtraction
                            </Button>
                            <Button onClick={this.openMultiplicationModule}>
                                * Multiplication
                            </Button>
                            <Button onClick={this.openDivisionModule}>
                                / Division
                            </Button>
                        </div>
                    </div>
                }
                {addition && <AdditionModule  name={name} toggleHome={this.openMenu}/>}
                {subtraction && <div />}
                {multiplication && <div />}
                {division && <div />}
            </div>
        );
    }
}

MainMenu.propTypes = {
    name: PropTypes.string.isRequired
}

export default MainMenu;