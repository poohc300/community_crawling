const express = require('express');
const bodyParser = require('body-parser');
const router = require('router');
const app = express();
const crawler = require('./crawler.js');
app.use(bodyParser.urlencoded( { extended : true }));
app.use(bodyParser.json());




app.listen(3000);