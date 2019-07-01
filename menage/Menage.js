var db = require('../db');

var Menage = {
    getAllMenage: function(region, callback)
    {
        return db.query('SELECT maid.id,maid.nom,maid.prenom,maid.tel,maid.email,maid.description,note,sexe,maid.ville,maid.rue,maid.cp,photo,avatar from maid WHERE region = ?',[region], callback);
    },
    getMenageVisite: function(id, callback) // // retourne 1 femme concerné par une visite
    {
        return db.query('SELECT maid.id,nom,prenom,tel,email,maid.description,note,sexe,maid.ville,rue,maid.cp,photo,avatar from maid INNER JOIN visite WHERE maid.id = visite.idMaid AND visite.id = ?',[id], callback);
    },
    getMenageUtilisateur: function(id, callback) // // retourne toutes les femmes concerné par un utilisateur
    {
        return db.query('SELECT maid.id,maid.nom,maid.prenom,maid.tel,maid.email,maid.description,note,maid.sexe,maid.ville,maid.rue,maid.cp,photo,avatar,visite.id AS idVisite from maid,visite,utilisateur WHERE maid.id = visite.idMaid AND visite.idUtilisateur = utilisateur.id AND utilisateur.id = ?',[id], callback);
    },
    createMenage: function (Maid, callback) {
        return db.query('Insert Into maid(nom, prenom, tel, email, description, sexe, mdp, ville, rue, cp, region) VALUES (? ,?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [Maid.nom, Maid.prenom, Maid.tel, Maid.email, Maid.description, Maid.sexe, Maid.mdp, Maid.ville, Maid.rue, Maid.cp, Maid.region], callback);
    },
};

module.exports = Menage;
