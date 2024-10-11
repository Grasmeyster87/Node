const express = require('express');

const router = express.Route();

router.get('/comments', getCommentsHandler);
router.post('/comments', postCommentsHandler);
router.get('/comments/:commentId', getSingleCommentHandler);

router.delete('/comments/:commentId', deleteCommentHandler);

module.exports = router