const express = require('express');
const commentsRouter = require('./comments');
const usersRoute = require('./users');
const rootRouter = require('./root');

const router = express.Router();



router.use('/comments', commentsRouter);

router.use('/users', usersRoute);

router.use('/', rootRouter);

module.exports = router;