import React, {PureComponent} from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/header/header';
import Course from './pages/course/course';
import CourseList from './pages/coursesList/coursesList';
import Exercise from './pages/exercise/exercise';
import Register from './pages/register/register';
import {UserContext} from './context';
import './App.css';

class App extends PureComponent {
    state = {
        user: 'Hi',
    };

    componentDidMount() {
        fetch('/api/v1/courses')
            .then(res => res.json())
            .then(res => console.log(res));
    }

    render() {
        const {user} = this.state;

        return (
            <UserContext.Provider value={user}>
                <Header />
                <div className="container">
                    <Switch>
                        <Route path="/courses/:id/exercise/:number" component={Exercise}/>
                        <Route path="/courses/:id" component={Course}/>
                        <Route path="/courses" component={CourseList}/>
                        <Route path="/register" component={Register} />
                    </Switch>
                </div>
            </UserContext.Provider>
        );
    }
}

export default App;
