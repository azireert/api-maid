var db = require('../db');

var Visite = {
    createVisite: function (Visite, callback) {
        return db.query('Insert Into visite(heureArrivee, idMaid, idUtilisateur , adresse, cp, ville, description, gratification) VALUES (? ,?, ?, ?, ?, ?, ?, ?)', [Visite.heureArrivee, Visite.idMaid, Visite.idUtilisateur , Visite.adresse, Visite.cp, Visite.ville, Visite.description, Visite.gratification], callback);
    }
};

module.exports = Visite;
