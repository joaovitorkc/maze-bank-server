const { Router } = require('express');
const router = Router();

const users = [
    { id: 1, name: 'Miguelito' },
    { id: 2, name: 'Franklito' }
];

function handleMessage(messageContent) {
    const message = { message: messageContent };
    return message;
}

router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(item => item.id === id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json(handleMessage("Usuário não encontrado."));
    }
});

router.post('/', (req, res) => {
    if (req.body.name) {
        const newUser = {
            id: users.length + 1,
            name: req.body.name
        };

        users.push(newUser);
        res.json(handleMessage("Usuário criado com sucesso."));
    } else {
        res.status(400).json(handleMessage("Erro ao criar o usuário. Nome não fornecido."));
    }
});

router.delete('/', (req, res) => {
    res.status(400).json(handleMessage("Rota DELETE não permitida."));
});

module.exports = router;
