var db = require('../db');

var Utilisateur = {
    getUtilisateur: function(callback)
    {
        return db.query('SELECT * from utilisateur', callback);
    },
    createUtilisateur: function (Utilisateur, callback) {
        return db.query('Insert Into utilisateur(nom, prenom, email, tel, mdp, ville, rue, cp, region, sexe) VALUES (? ,?, ?, ?, ?, ?, ?, ?, ?, ?)', [Utilisateur.nom, Utilisateur.prenom, Utilisateur.email, Utilisateur.tel, Utilisateur.mdp, Utilisateur.ville, Utilisateur.rue, Utilisateur.cp, Utilisateur.region, Utilisateur.sexe], callback);
    },
    getUtilisateurMenage: function(id, callback) // // retourne tous les utilisateurs concernés par une femme
    {
        return db.query('SELECT utilisateur.id,utilisateur.nom,utilisateur.prenom,utilisateur.tel,utilisateur.email,utilisateur.sexe,utilisateur.ville,utilisateur.rue,utilisateur.cp,visite.id AS idVisite from maid,visite,utilisateur WHERE maid.id = visite.idMaid AND visite.idUtilisateur = utilisateur.id AND maid.id = ?',[id], callback);
    }

};

module.exports = Utilisateur;
