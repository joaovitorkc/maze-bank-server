const handleMessage = require('../../libs/message');
const conn = require('../../libs/connection');

exports.updateUserById = (req, res) => {
    const userId = req.params.id;
    const { name, cpf, phone, password, role, situation } = req.body;

    if (!name && !cpf && !phone && !password && !role && situation === undefined) {
        return res.status(400).json(handleMessage("Nenhum dado de atualização fornecido."));
    }

    const updateFields = [];
    if (name) updateFields.push(`name = '${name}'`);
    if (cpf) updateFields.push(`cpf = '${cpf}'`);
    if (phone) updateFields.push(`phone = '${phone}'`);
    if (password) updateFields.push(`password = '${password}'`);
    if (role) updateFields.push(`role = '${role}'`);
    if (situation !== undefined) updateFields.push(`situation = '${situation}'`);

    const query = `UPDATE users SET ${updateFields.join(', ')} WHERE id = ${userId}`;

    conn.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json(handleMessage("Erro ao atualizar o usuário. Por favor, tente novamente."));
        } else {
            if (result.affectedRows === 0) {
                res.status(404).json(handleMessage("Usuário não encontrado."));
            } else {
                res.json(handleMessage("Usuário atualizado com sucesso."));
            }
        }
    });
};
