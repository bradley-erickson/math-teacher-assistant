import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MainMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menu">
                <div>
                    Hello, {this.props.name}!
                    <br />
                    What do you need help with?
                </div>
                <div>
                    <Link to="/addition/background">
                        <Button>
                            + Addition
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

MainMenu.propTypes = {
    // name: PropTypes.string.isRequired
}

export default MainMenu;