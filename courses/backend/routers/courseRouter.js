const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

const {Course} = require('../dbConnection');
const prefix = '/api/v1';

router.get(`${prefix}/courses`, (req, res) => {
    Course.find({}, (err, courses) => {
        if (err) {
            console.error(err);
            if (err.name === 'ValidationError') {
                return res.status(400).send({error: 'Validation error'});
            }

            return res.status(500).send({error: 'Server error'});
        }

        res.status(200).send(courses);
    });
});

router.post(`${prefix}/courses`, auth, async (req, res) => {
    const course = new Course(req.body);
    course.author = req.user._id;

    course.save((err) => {
        if (err) {
            console.error(err);
            if (err.name === 'ValidationError') {
                return res.status(400).send({error: 'Validation error'});
            }

            return res.status(500).send({error: 'Server error'});
        }

        res.status(200).send(course);
    });
});

router.get(`${prefix}/courses/:id/exercises`, (req, res) => {
    Course.find({id: req.params.id}, 'exercises', (err, exercises) => {
        if (err) {
            console.error(err);
            if (err.name === 'ValidationError') {
                return res.status(400).send({error: 'Validation error'});
            }

            return res.status(500).send({error: 'Server error'});
        }

        res.status(200).send(exercises);
    });
});

module.exports = router;