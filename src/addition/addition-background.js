import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AdditionBackground extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        this.props.click('example');
    }

    render() {
        return (    
            <div>
                <div>
                    <b>Background:</b>
                    <br />
                    This is some crazy shit dawg.
                </div>
                <div>
                <Link to="/addition/example">
                    <Button onClick={this.nextPage}>
                        Next
                    </Button>
                </Link>
                </div>
            </div>
        );
    }
};

AdditionBackground.propTypes = {
    click: PropTypes.func.isRequired
}

export default AdditionBackground;