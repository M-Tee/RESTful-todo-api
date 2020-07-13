import express from 'express';
import { array } from 'prop-types';


const webApp = express();

app.listen(PORT,callBack);

app.get('/url',(req, res) => {
    res.status(200).send({
        success: 'Success',
        message: 'Retrived successfully'
    }
    )
});

app.post('url', (req, res) => {

    const newEntry = {
        id: array.length + 1,
        name: req.body.title,
        description: req.body.description
    }
   db.push(newEntry) 
})