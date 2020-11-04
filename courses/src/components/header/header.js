import React from 'react';
// import PropTypes from 'prop-types';

import './style.css';

const Header = props => {
    return (
        <div className="header">
            <div className="container">
                <div>Курсы</div>
                <div>Пользователь</div>
            </div>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;