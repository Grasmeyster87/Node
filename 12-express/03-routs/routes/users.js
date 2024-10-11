

const express = require('express');
const {
    getUsersHadler: getUsersHadler,
    getSingleUserHandler,
    postUsersHandler
} = require('../controllers/users.js');

const router1 = express.Router();

router1.get('/', getUsersHadler);
router1.post('/', postUsersHandler);
router1.get('/:userId', getSingleUserHandler);

module.exports = router1;