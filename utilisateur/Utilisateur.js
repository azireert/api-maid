var db = require('../db');

var Utilisateur = {
    getUtilisateur: function(callback)
    {
        return db.query('SELECT * from utilisateur', callback);
    },
};

module.exports = Utilisateur;
