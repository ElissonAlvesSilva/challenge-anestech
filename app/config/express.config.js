'use strict';
const express = require('express');
const body_parser = require('body-parser');
const express_validator = require('express-validator');
const consign = require('consign');

const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: false
}));
app.use(express_validator());


consign({cwd: 'app'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);

module.exports.app = app ;