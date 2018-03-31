const express = require('express')

const app = express();
const jsonParser= require('body-parser').json();
app.listen(process.env.PORT || 3000, () => console.log('server dang chay'));
app.get('/i', (req, res)=> res.send('Hello'));
app.post('/signin',jsonParser, (req, res) => {
    res.send(req.body);
})