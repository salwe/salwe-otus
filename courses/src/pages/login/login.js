import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {UserContext} from '../../context';

class Login extends PureComponent {
    state = {
        login: '',
        password: '',
    }
    static contextType = UserContext;

    changeField(fieldName, value) {
        this.setState({[fieldName]: value});
    }

    test() {
        const {login, password} = this.state;
        const {setUser} = this.context;
        fetch('/api/v1/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({login, password})
        })
            .then(res => {
                if (res.status === 200) {
                    const token = res.headers.get('x-auth-token');
                    sessionStorage.setItem('token', token);

                    return res.json();
                }
            })
            .then(res => {
                setUser(res);
            });
    }

    render() {
        return (
            <div className="login-page">
                <div className="container">
                    <div className="row">
                        <label htmlFor="">Login</label>
                        <input type="text" onChange={e => this.changeField('login', e.target.value)}/>
                    </div>
                    <div className="row">
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={e => this.changeField('password', e.target.value)}/>
                    </div>
                    <button onClick={() => this.test()}>Submit</button>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;