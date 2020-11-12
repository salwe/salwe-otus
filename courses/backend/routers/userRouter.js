const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const {User} = require('../dbConnection');
const prefix = '/api/v1';

router.post(`${prefix}/signup`, async (req, res) => {
    const {login, password} = req.body;

    let user = await User.findOne({login});
    if (user) return res.status(400).send('User already registered');

    user = new User({
        login,
        password: await bcrypt.hash(password, 10),
    });

    user.save((err) => {
        if (err) {
            console.error(err);
            if (err.name === 'ValidationError') {
                return res.status(400).send({error: 'Validation error'});
            }

            return res.status(500).send({error: 'Server error'});
        }
        const token = user.generateAuthToken();

        res.header('x-auth-token', token)
            .send({
                _id: user._id,
                login: user.login,
            });
    });
});

router.post(`${prefix}/login`, (req, res) => {
    const {login, password} = req.body;

    User.findOne({login}, (err, user) => {
        if (err) {
            console.error(err);
            res.status(500).json({error: 'Internal error, please try again later'});
        } else if (!user) {
            res.status(401).json({error: 'Incorrect login or password'});
        } else {
            user.checkPasswordCorrect(password, (err, same) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({error: 'Internal error, please try again later'});
                } else if (!same) {
                    res.status(401).json({error: 'Incorrect login or password'});
                } else {
                    const token = user.generateAuthToken();

                    res.header('x-auth-token', token)
                        .send({
                            _id: user._id,
                            login: user.login,
                        });
                }
            });
        }
    });
});

router.get(`${prefix}/users`, auth, (req, res) => {
    User.find({}, '-password', (err, users) => {
        if (err) {
            console.error(err)
            return res.status(500).send({error: 'Server error'});
        }

        res.status(200).send(users);
    });
});

router.get(`${prefix}/users/current`, auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');

    res.send(user);
});

router.put(`${prefix}/users/current`, auth, async (req, res) => {
    const {_id} = req.user;

    await User.updateOne({_id}, req.body);

    User.findOne({_id}, '-password', (err, user) => {
        if (err) {
            console.error(err);
            res.status(500).json({error: 'Internal error, please try again later'});
        } else if (!user) {
            res.status(401).json({error: 'Incorrect login or password'});
        } else {
            res.status(200).send(user);
        }
    });
});

module.exports = router;