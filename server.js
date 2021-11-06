const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 5000)
const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'catalogots'
}

// middlewares
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());

// routes
app.get('/', (req,res) => {
    res.send('Welcome to my API');
})
app.use('/api', routes);


app.get('/api', (req,res) => {
    res.send('Biblioteca');
})
// server running
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'));
})


