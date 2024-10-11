const express = require('express');
const {
    getCommentsHandler,
    postCommentsHandler,
    getSingleCommentHandler,
    deleteSingleCommentHandler
} = require('../controllers/comments');

const router = express.Route();


router.get('/', getCommentsHandler);
router.post('/', postCommentsHandler);
router.get('/:commentId', getSingleCommentHandler);
router.delete('/:commentId', deleteSingleCommentHandler);

module.exports = router;