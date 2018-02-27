const express = require('express');
const app = express();

app.use(require('method-override')('_method'));
app.use(require('body-parser').json());

const db = require('./db');
const { Customer } = db.models;

const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/api/customers', (req, res, next) => {
    Customer.findAll() 
        .then(customers => res.json(customers))       
        .catch(err => next(err)) 
})

app.post('/api/customers', (req, res, next) => {
    Customer.create({ email: req.body.email })
        .then (() => Customer.findAll())
        .then (()=> res.redirect('/'))         
        .catch(err => next(err)) 
})




app.listen(port, ()=> console.log(`listening on port ${port}`));

db.sync()
    .then(()=> db.seed());