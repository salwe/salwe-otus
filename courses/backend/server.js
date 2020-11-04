const express = require('express');
const coursesRouter = require('./routers/routers');

const app = express();

app.use(express.json());

app.use(coursesRouter);

app.listen(8080, () => console.log('Express server listening on 8080'));