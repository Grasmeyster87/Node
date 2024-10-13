import express from 'express';
import morgan from 'morgan';

const app = express();

// logs info about request
app.use(morgan('tiny')); //tiny, combined, common, dev, short, tiny
// converts JSON  to  JS Object in POST, PUT, PATCH request
app.use(express.json());

//convert from data to JS Object in POST, PUT, PATCH requsts
// конвертирование отправленных на сервер данных форм в обект JS 
// extended: true использум внешний модуль qs
app.use(express.urlencoded({ extended: true }));


app.use((req, res) => {
    const personData = {
        name: 'Vitaliy',
        isInstructor: true
    };
    console.log(req.body);
    return res.json(personData);
});

app.listen(5000, () => console.log('server is listening at port 5000'));