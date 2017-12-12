var express = require('express');
var JsonModel = require('json-model');
var schema = require('./final.json');

var app = express();

var validator = JsonModel.validator(schema);

var result = validator(data);

console.log(result.valid);
console.log(result.errors);
console.log(result.schemas);
console.log(result.links);
console.log(result.missing);

app.listen(3000);
console.log('Express-server gestart op http://localhost:3000');
