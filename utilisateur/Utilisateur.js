var db = require('../db');

var Utilisateur = {
    getUtilisateur: function(callback)
    {
        return db.query('SELECT * from utilisateur', callback);
    },
    createUtilisateur: function (Utilisateur, callback) {
        return db.query('Insert Into utilisateur(nom, prenom, email, tel, mdp, ville, rue, cp, region, sexe) VALUES (? ,?, ?, ?, ?, ?, ?, ?, ?, ?)', [Utilisateur.nom, Utilisateur.prenom, Utilisateur.email, Utilisateur.tel, Utilisateur.mdp, Utilisateur.ville, Utilisateur.rue, Utilisateur.cp, Utilisateur.region, Utilisateur.sexe], callback);
    },
};

module.exports = Utilisateur;
