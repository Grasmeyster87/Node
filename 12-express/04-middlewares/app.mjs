import express from 'express';
import morgan from 'morgan';
import qs from 'querystring';

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
app.use(morgan('tiny')); //tiny, combined, common, dev, short, tiny

app.use(express.json());

/* app.use((req, res, next) => {
    //console.log(req);
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => {
        const parsedJSON = JSON.parse(data);
        req.body = parsedJSON;
        next();
    });
}); */

app.use((req, res, next) => {
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let data = '';
        req.on('data', (chunk) => data += chunk.toString());
        req.on('end', () => {
            //console.log(data)
            const parsedFromData = qs.parse(data);
            //console.log(parsedFromData);
            req.body = parsedFromData;
            next();
        });
    } else {
        next();
    }
    //console.log(req);
    //console.log(req.headers['content-type']);
});

app.use((req, res) => {
    console.log(req.body);
    return res.send('This is express server');
});

app.listen(5000, () => console.log('server is listening at port 5000'));