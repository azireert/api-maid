var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Auth = require('./Auth');

router.post('/', function (req, res) {
    Auth.getAuth(req.body,function(err,rows){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports = router;
