const handleMessage = require('../../libs/message');
const conn = require('../../libs/connection');

exports.getUserById = (req, res) => {
    const userId = req.params.id;

    const query = `SELECT * FROM users WHERE id = ${userId}`;

    conn.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json(handleMessage("Erro ao obter o usuário. Por favor, tente novamente."));
        } else {
            if (result.length === 0) {
                res.status(404).json(handleMessage("Usuário não encontrado."));
            } else {
                res.json([result[0]]);
            }
        }
    });
};
