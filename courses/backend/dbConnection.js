const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017');

const db = mongoose.connection;

db.on('error', err => console.error('err.message'));
db.once('open', () => console.info('Connected to MongoDB!'));


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String},
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, unique: true},
});

const ExerciseSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    comments: [],
});

const CourseSchema = new Schema({
    title: {type: String, required: true},
    exercises: [ExerciseSchema],
    description: {type: String},
});


const Course = mongoose.model('course', CourseSchema);


module.exports = {
    Course: Course,
};