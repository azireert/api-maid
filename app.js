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

var AuthController = require('./auth/AuthController');
app.use('/auth', AuthController);

var CommentaireController = require('./commentaire/CommentaireController');
app.use('/commentaire', CommentaireController);



module.exports = app;
