var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

var UtilisateurController = require('./utilisateur/UtilisateurController');
app.use('/utilisateur', UtilisateurController);

var MenageController = require('./menage/MenageController');
app.use('/menage', MenageController);

var VisiteController = require('./visite/VisiteController');
app.use('/visite', VisiteController);





module.exports = app;
