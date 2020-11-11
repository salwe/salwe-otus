import React, {PureComponent, Fragment} from 'react';
import {Link} from 'react-router-dom';

import './style.css';

class Signup extends PureComponent {
    state = {
        login: '',
        password: '',
        isRegister: false,
    }

    changeField(fieldName, value) {
        this.setState({[fieldName]: value});
    }

    test() {
        const {login, password} = this.state;
        fetch('/api/v1/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({login, password})
        })
            .then(res => {
                console.log(res, 'res');
                return res.json();
            })
            .then(res => {
                this.setState({isRegister: true});
            });
    }

    render() {
        const {isRegister} = this.state;

        return (
            <div className="register-page">
                <div className="container">
                    {isRegister ?
                        <div>Now you can <Link to="/login">log in</Link></div>
                        :
                        <Fragment>
                            <div className="row">
                                <label htmlFor="">Login</label>
                                <input type="text" onChange={e => this.changeField('login', e.target.value)}/>
                            </div>
                            <div className="row">
                                <label htmlFor="">Password</label>
                                <input type="password" onChange={e => this.changeField('password', e.target.value)}/>
                            </div>
                            <button onClick={() => this.test()}>Submit</button>
                        </Fragment>
                    }
                </div>
            </div>
        );
    }
}

export default Signup;