const handleMessage = require('../../libs/message');
const conn = require('../../libs/connection');

exports.insertUser = (req, res) => {
    const { name, cpf, password, role } = req.body;

    if (!name || !cpf || !password || !role) {
        const errorMessage = [];

        if (!name) {
            errorMessage.push("Nome não informado.");
        }
        if (!cpf) {
            errorMessage.push("CPF não informado.");
        }
        if (!password) {
            errorMessage.push("Senha não informada.");
        }
        if (!role) {
            errorMessage.push("Perfil não informado.");
        }

        return res.status(400).json(handleMessage(`Erro ao criar o usuário. ${errorMessage.join(' ')}`));
    }

    const query = 'INSERT INTO users (name, cpf, password, role) VALUES (?, ?, ?, ?)';
    const values = [name, cpf, password, role];

    conn.query(query, values, function (err) {
        if (err) {
            console.error(err);

            if (err.code === 'ER_DUP_ENTRY') {
                res.status(400).json(handleMessage("Erro ao criar o usuário. CPF já cadastrado."));
            } else {
                res.status(500).json(handleMessage("Erro ao criar o usuário. Por favor, verifique os dados fornecidos."));
            }
        } else {
            res.json(handleMessage("Usuário criado com sucesso."));
        }
    });
};
