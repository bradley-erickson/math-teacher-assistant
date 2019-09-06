import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { title, className, children } = props;
    return (
        <div className={`header ${className}`}>
            <span className="header-title">
                {title}
            </span>
            {children}
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired
}

export default Header;