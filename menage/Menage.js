var db = require('../db');

var Menage = {
    getAllMenage: function(region, callback)
    {
        return db.query('SELECT * from maid WHERE region = ?',[region], callback);
    },
};

module.exports = Menage;
