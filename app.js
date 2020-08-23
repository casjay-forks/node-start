// Packages
const express = require('express');
const path = require('path');
const app = express();

// Middlewares
const cors = require('cors');
const logger = require('morgan');

// Routes
const testRouter = require('./routers/test.router');
const authRouter = require('./routers/auth.router');
const userRouter = require('./routers/user.router');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', testRouter);
app.use('/api/v1', authRouter);
app.use('/api/v1', userRouter);

module.exports = app;
