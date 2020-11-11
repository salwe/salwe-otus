import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {UserContext} from '../../context';

class Course extends PureComponent {
    static contextType = UserContext;

    render() {
        console.log(this.context, 'ctx');

        return (
            <div>

            </div>
        );
    }
}

Course.propTypes = {};

export default Course;