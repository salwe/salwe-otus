import React, {PureComponent} from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/header/header';
import Course from './pages/course/course';
import CourseList from './pages/coursesList/coursesList';
import Exercise from './pages/exercise/exercise';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import User from './pages/user/user';
import {UserContext} from './context';
import './App.css';

class App extends PureComponent {
    state = {
        user: null,
        courses: [],
    };
    onSetUser = this.setUser.bind(this);

    setUser(value) {
        this.setState({user: value});
    }

    componentDidMount() {
        const token = sessionStorage.getItem('token');
        fetch('/api/v1/courses', {headers: {'authorization': token}})
            .then(res => res.json())
            .then(res => {
                this.setState({courses: res});
            });
    }

    render() {
        const {user, courses} = this.state;

        return (
            <UserContext.Provider value={{user, setUser: this.onSetUser}}>
                <Header />
                <div className="container">
                    <Switch>
                        <Route path="/courses/:id/exercise/:number" component={Exercise}/>
                        <Route path="/courses/:id" component={Course}/>
                        <Route path="/courses" render={() => <CourseList data={courses}/>}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/user" component={User} />
                    </Switch>
                </div>
            </UserContext.Provider>
        );
    }
}

export default App;
