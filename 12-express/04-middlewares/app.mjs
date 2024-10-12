import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny')); //tiny, combined, common, dev, short, tiny
app.use(express.json());
// конвертирование отправленных на сервер данных форм в обект JS 
// extended: true использум внешний модуль qs
app.use(express.urlencoded({ extended: true }));


app.use((req, res) => {
    console.log(req.body);
    return res.send('This is express server');
});

app.listen(5000, () => console.log('server is listening at port 5000'));