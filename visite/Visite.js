var db = require('../db');

var Visite = {
    createVisite: function (Visite, callback) {
        return db.query('Insert Into visite(heureArrivee, idMaid, idUtilisateur , adresse, cp, ville, description, gratification) VALUES (? ,?, ?, ?, ?, ?, ?, ?)', [Visite.heureArrivee, Visite.idMaid, Visite.idUtilisateur , Visite.adresse, Visite.cp, Visite.ville, Visite.description, Visite.gratification], callback);
    },
    getUtilisateurVisite: function(id, callback) // retourne toutes les visites conerné par un utilisateur
    {
        return db.query('SELECT * from visite WHERE idUtilisateur = ?',[id], callback);
    },
    getMenageVisite: function(id, callback) // retourne toutes les visites conerné par un utilisateur
    {
        return db.query('SELECT * from visite WHERE idMaid = ?',[id], callback);
    },
    confirmVisite: function(Visite, callback)
    {
        return db.query('UPDATE visite SET statut = 1 WHERE id = ?',[Visite.id], callback);
    },
    finishVisite: function(Visite, callback)
    {
        return db.query('UPDATE visite SET statut = 2 WHERE id = ?',[Visite.id], callback);
    },
    cancelVisite: function(Visite, callback)
    {
        return db.query('UPDATE visite SET statut = 3 WHERE id = ?',[Visite.id], callback);
    },
    updateDateDepart: function(Visite, callback)
    {
        return db.query('UPDATE visite SET heureDepart = ? WHERE id = ?',[Visite.heureDepart, Visite.id], callback);
    },
};



module.exports = Visite;
