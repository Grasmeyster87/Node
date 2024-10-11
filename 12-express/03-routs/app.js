const express = require('express');

const router = require('./routes/index');
//const router = require('./routes'); //  при импорте файла index.js он опускается в названии

const app = express();
app.use(router);
//app.use('/', router)

app.listen(5000, () => console.log('Server was started on port 5000'));

