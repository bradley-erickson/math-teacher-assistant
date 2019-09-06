import React from 'react';
import PropTypes from 'prop-types';

const AdditionBackground = (props) => {
    const { className } = props;
    return (
        <div className={className}>
            <span>
                <b>Background:</b>
                <br />
                This is some crazy shit dawg.
            </span>
        </div>
    );
};

AdditionBackground.propTypes = {
    className: PropTypes.func.isRequired
}

export default AdditionBackground;