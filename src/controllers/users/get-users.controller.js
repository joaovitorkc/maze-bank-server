const handleMessage = require('../../libs/message');
const conn = require('../../libs/connection');

exports.getUsers = (req, res) => {
    const query = 'SELECT * FROM users';

    conn.query(query, function (err, data) {
        if (err) {
            console.error(err);
            res.status(500).json(handleMessage("Erro ao obter usuários. Por favor, tente novamente."));
        } else {
            const users = data;

            res.json(users);
        }
    });
};
