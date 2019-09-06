import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

class EndModule extends Component {
    constructor(props) {
        super(props);
        this.retry = this.retry.bind(this);
    }

    retry() {
        this.props.click('practice');
    }
    
    render() {
        const { moduleType } = this.props;
        return (    
            <div>
                <div>
                    <b>Congratulations, {this.props.name}!</b>
                    <br />
                    You completed the {_.upperFirst(moduleType)} module!
                </div>
                <div>
                <Link to="/">
                    <Button>
                        Home
                    </Button>
                </Link>
                <Link to={`/${moduleType}/practice`}>
                    <Button onClick={this.retry}>
                        Retry
                    </Button>
                </Link>
                </div>
            </div>
        );
    }
};

EndModule.propTypes = {
    moduleType: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
}

export default EndModule;