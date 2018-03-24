const express = require('express')

const app = express();
const jsonParser= require('body-parser').json();
app.get('/', (req, res)=> res.send('Hello'));
app.listen(3000, () => console.log('server dang chay'));

app.post('/signin',jsonParser, (req, res) => {
    res.send(req.body);
})