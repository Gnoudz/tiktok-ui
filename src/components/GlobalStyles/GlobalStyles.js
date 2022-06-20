import './GlobalStyles.scss';
import PropTypes from 'prop-types';
// Trường hợp muốn GlobalStyles chỉ nhận 1 children
// import React from 'react';

function GlobalStyles({ children }) {
    // return React.Children.only(children)
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
