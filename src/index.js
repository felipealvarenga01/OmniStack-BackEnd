const { response } = require('express');
const express = require ('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://felipealvarenga01:filho4V8@cluster0.vozcve4.mongodb.net/?retryWrites=true&w=majority', {});

app.use(express.json());
app.use(routes);

app.listen(3333);