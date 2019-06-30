var db = require('../db');

var Connexion = {
    connect: function(email, mdp, callback)
    {
        if (db.query('SELECT * FROM maid WHERE email = ? AND mdp = ?', [email], [mdp]) != null)
        {
            return db.query('SELECT * FROM maid WHERE email = ? AND mdp = ?', [email], [mdp]);
        }
        if (db.query('SELECT * FROM utilisateur WHERE email = ? AND mdp = ?', [email], [mdp]))
        {
            return db.query('SELECT * FROM utilisateur WHERE email = ? AND mdp = ?', [email], [mdp]);
        } 
    },
}

module.exports = Connexion;
