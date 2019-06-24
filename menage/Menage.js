var db = require('../db');

var Menage = {
    getAllMenage: function(region, callback)
    {
        return db.query('SELECT * from maid WHERE region = ?',[region], callback);
    },
    /*getTrainingWeek: function(callback)
    {
        return db.query('SELECT * FROM sortie_velo WHERE YEARWEEK(`dateSortie`, 1) = YEARWEEK(CURDATE(), 1)', callback);
    },
    createTraining: function (Training, callback) {
        return db.query('Insert Into sortie_velo(kilometre, isVelo, dateSortie , duree, forme) VALUES (? ,?, ?, ?, ?)', [Training.kilometre, Training.isVelo, Training.dateSortie , Training.duree, Training.forme], callback);
    }*/
};

module.exports = Menage;
