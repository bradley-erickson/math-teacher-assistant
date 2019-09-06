import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AdditionPractice extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        this.props.click('end');
    }

    render() {
        return (    
            <div>
                <div>
                    <b>Practice:</b>
                    <br />
                    This is some crazy shit dawg.
                </div>
                <div>
                <Link to="/addition/practice">
                    <Button onClick={this.nextPage}>
                        Next
                    </Button>
                </Link>
                </div>
            </div>
        );
    }
};

AdditionPractice.propTypes = {
    click: PropTypes.func.isRequired
}

export default AdditionPractice;