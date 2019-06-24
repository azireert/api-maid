var db = require('../db');

var Utilisateur = {
    getUtilisateur: function(callback)
    {
        return db.query('SELECT * from visiteur', callback);
    },
};

module.exports = Utilisateur;
