

const express = require('express');
const commentsRouter = require('./routes/comments.js');

const app = express();

const getRootHandler = (req, res) => {
    console.log('First handler');
    res.send('Get root route');
};

// users

const getUsersHadler = (req, res) => {
    res.send('Get users route');
};

const getSingleUserHandler = (req, res) => {
    res.send(`Get user route. UserId ${req.params.userId}`);
};

const postUsersHandler = (req, res) => {
    console.log(req.params);
    res.send('Post users route');
};



//app.route('/comments').get(getCommentHandler).post(postCommentsHandler);

app.get('/', getRootHandler);

app.use('/comments', commentsRouter);

app.get('/users', getUsersHadler);
app.post('/users', postUsersHandler);
app.get('/user/:userId', getSingleUserHandler);


app.listen(5000, () => console.log('Server was started on port 5000'));

