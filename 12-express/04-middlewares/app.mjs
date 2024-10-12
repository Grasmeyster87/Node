import express from 'express';
import morgan from 'morgan';

const app = express();

/* 

const logger = (req, res, next) => {
    console.log(req.method, req.path);
    next();
};

app.use(logger); 

app.get('/', logger, () => {res.send(...)})

app.use(logger (req, res) => res.send('This is express server'));

*/
app.use(morgan('combined'));

app.use((req, res, next) => {
    //console.log(req);
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => console.log(JSON.parse(data)));
    next();
});

app.use((req, res) => res.send('This is express server'));


app.listen(5000, () => console.log('server is listening at port 5000'));