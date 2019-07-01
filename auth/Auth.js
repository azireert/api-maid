var db = require('../db');

var Auth = {
    getAuth: function (Auth, callback) {
        if (Auth.isMaid === '' || Auth.isMaid === false) {
            return db.query('SELECT id, nom, prenom, email, tel, admin, ville, rue, cp, region, sexe FROM utilisateur WHERE email = ? AND mdp = ?',[Auth.email, Auth.mdp], callback);
        } else {
            return db.query('SELECT id, nom, prenom, email, tel, description, note, photo, avatar, estDispo, ville, rue, cp, region, sexe FROM maid WHERE email = ? AND mdp = ?',[Auth.email, Auth.mdp],callback);
        }
    },
}

module.exports = Auth;
