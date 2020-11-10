const config = require('config');
const express = require('express');
const userRouter = require('./routers/userRouter');
const courseRouter = require('./routers/courseRouter');

const app = express();

if (!config.get('privatekey')) {
    console.error('FATAL ERROR: privatekey is not defined.');
    process.exit(1);
}

app.use(express.json());

app.use(userRouter);
app.use(courseRouter);

app.listen(8080, () => console.log('Express server listening on 8080'));