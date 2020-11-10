import React, {PureComponent} from 'react';

import {UserContext} from '../../context';
import './style.css';

class User extends PureComponent {
    static contextType = UserContext;

    render() {
        const {user = {}} = this.context;

        return (
            <div className="user-page">
                <div className="container">
                    <p>Фамилия: {user.surname ? user.surname : '-'}</p>
                    <p>Имя: {user.name ? user.name : '-'}</p>
                    <p>Email: {user.email ? user.email : '-'}</p>
                </div>
            </div>
        );
    }
}

export default User;