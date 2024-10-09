

const express = require('express');

const app = express();

const firsthandler = (req, res, next) => {
    console.log('First handler');
    next();
};
const secondhandler = (req, res) => {
    console.log('Second handler');
    res.send('Response from Expres');
};

app.get('/', firsthandler, secondhandler);

app.listen(5000, () => console.log('Server was started on port 5000'));

