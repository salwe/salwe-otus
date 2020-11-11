const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017');

const db = mongoose.connection;

db.on('error', err => console.error(err.message));
db.once('open', () => console.info('Connected to MongoDB!'));


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String},
    surname: {type: String},
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, unique: true, sparse: true},
    courses: [{type: Schema.Types.ObjectId, ref: 'Course'}],
});

UserSchema.methods.generateAuthToken = function() {
    return jwt.sign({_id: this._id}, config.get('privatekey'));
}

UserSchema.methods.checkPasswordCorrect = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, same) {
        if (err) callback(err);
        else callback(err, same);
    });
}

const User = mongoose.model('User', UserSchema);


const CommentSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    text: {type: String, required: true},
});

const ExerciseSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    comments: [CommentSchema],
});

const CourseSchema = new Schema({
    title: {type: String, required: true},
    exercises: [ExerciseSchema],
    description: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    permittedUsers: [{type: Schema.Types.ObjectId, ref: 'User'}],
});

const Course = mongoose.model('Course', CourseSchema);


module.exports = {
    User,
    Course,
};