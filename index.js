import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express(); 

const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/users', usersRoutes);
app.use(bodyParser.urlencoded({ extended: false })); //Handles normal post requests

// Listen for incoming request
app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT : ${PORT}`));
