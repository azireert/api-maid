var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Connexion = require('./Connexion');


router.post('/', function (req, res){
    Connexion.getConnect(req.params.email, req.params.mdp, function(err, rows) {
        if(err)
        {
            res.status(400).json(err);    
        } else
        {
            res.json(rows);
        }

    });
});

module.exports = router;
