var db = require('../db');

var Visite = {
    createVisite: function (Visite, callback) {
        return db.query('Insert Into visite(heureArrivee, id_maid, id_utilisateur , adresse, cp, ville, description, gratification) VALUES (? ,?, ?, ?, ?, ?, ?, ?)', [Visite.heureArrivee, Visite.id_maid, Visite.id_utilisateur , Visite.adresse, Visite.cp, Visite.ville, Visite.description, Visite.gratification], callback);
    }
};

module.exports = Visite;
