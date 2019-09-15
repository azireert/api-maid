var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Visite = require('./Visite');


router.post('/', function (req, res) {
    Visite.createVisite(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

router.get('/utilisateur/:id', function (req, res) {
    Visite.getUtilisateurVisite(req.params.id, function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/menage/:id', function (req, res) {
    Visite.getMenageVisite(req.params.id, function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.put('/confirm', function (req, res) {
    Visite.confirmVisite(req.body, function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(req.body);
        }
    });
});

router.put('/finish', function (req, res) {
    Visite.finishVisite(req.body, function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(req.body);
        }
    });
});

router.put('/date', function (req, res) {
    Visite.updateDateDepart(req.body, function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(req.body);
        }
    });
});

router.put('/cancel', function (req, res) {
    Visite.cancelVisite(req.body, function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(req.body);
        }
    });
});

module.exports = router;
