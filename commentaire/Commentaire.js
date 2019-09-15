var db = require('../db');

var Commentaire = {
    createCommentaire: function (Commentaire, callback) {
        return db.query('Insert Into commentaire(message, datePost, idUtilisateur, idMaid) VALUES (? ,?, ?, ?)', [Commentaire.message, Commentaire.datePost, Commentaire.idUtilisateur, Commentaire.idMaid], callback);
    },
    getCommentaire: function(id, callback) // // retourne tous les utilisateurs concernés par une femme
    {
        return db.query('SELECT * FROM commentaire WHERE idMaid = ?',[id], callback);
    }
};

module.exports = Commentaire;
