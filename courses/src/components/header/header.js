import React, {PureComponent, Fragment} from 'react';
import {NavLink} from 'react-router-dom';

import {UserContext} from '../../context';
import './style.css';

class Header extends PureComponent {
    static contextType = UserContext;

    render() {
        const {user} = this.context;

        return (
            <div className="header">
                <div className="container navigation">
                    <NavLink to="/courses">Courses</NavLink>
                    {user ?
                        <NavLink to="/user">User</NavLink>
                        :
                        <Fragment>
                            <NavLink to="/signup">Sign up</NavLink>
                            <NavLink to="/login">Log in</NavLink>
                        </Fragment>
                    }
                </div>
            </div>
        );
    }
}

export default Header;