import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.onStart = this.onStart.bind(this);
        this.state = {
            studentName: ''
        };
    }

    onStart() {
        this.props.onStart(this.state.studentName);
    }

    render() {
        return (
            <div className="menu">
                <div>
                    Welcome to the Math Teacher Assistant!
                </div>
                <div>
                    Please input your name and click 'Start' to begin.
                    <br />
                    <Input placeholder="Name" ref={this.inputRef} onChange={e => this.setState({ studentName: e.target.value })}/>
                    <br />
                    <Link to="/menu">
                        <Button onClick={this.onStart}>
                            Start
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

WelcomeScreen.propTypes = {
    onStart: PropTypes.func.isRequired
}

export default WelcomeScreen;