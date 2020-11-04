const express = require('express');
const router = express.Router();

const {Course} = require('../dbConnection');

router.get('/api/v1/courses', (req, res) => {
    Course.find({}, (err, courses) => {
        if (err) {
            return res.status(500).send({error: 'Server error'});
        }
        res.status(200).send(courses);
    });
});

router.post('/api/v1/courses', (req, res) => {
    const course = new Course(req.body);

    course.save((err) => {
        if (err) {
            if (err.name === 'ValidationError') {
                return res.status(400).send({error: 'Validation error'});
            }

            return res.status(500).send({error: 'Server error'});
        }

        res.status(200).send(course);
    });
});

router.post('/api/v1/register', (req, res) => {

});


// router.post('/api/v1/person', function (req, res) {
//     /* Same as
//     const person = new Person({
//         name: req.body.name,
//         age: req.body.age
//     });
//     */
//     const person = new Person(req.body);

//     person.save((err) => {
//         if (err) {
//             if (err.name === 'ValidationError') {
//                 return res.status(400).send({error: 'Validation error'});
//             } else {
//                 return res.status(500).send({error: 'Server error'});
//             }
//         }

//         res.status(200).send(person);
//     });
// });

// router.get('/api/v1/person/:id', function (req, res) {
//     Person.findById(req.params.id, (err, person) => {
//         if (err) {
//             return res.status(500).send({error: 'Server error'});
//         }
//         if (!person) {
//             return res.status(404).send({error: 'Not found'});
//         }
//         res.send(person);
//     });
// });

module.exports = router;