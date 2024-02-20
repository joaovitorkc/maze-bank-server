const { Router } = require('express');
const router = Router();

const payments = [
    { id: 1, transation_code: "TSC001", status: "Aprovado", method: "Cartão de credito", amount: "3000,00", name: 'Miguelito' },
    { id: 2, transation_code: "TSC002", status: "Em andamento", method: "Cartão de credito", amount: "2500,00", name: 'Franklito' }
];

function handleMessage(messageContent) {
    const message = { message: messageContent };
    return message;
}

router.get('/', (req, res) => {
    res.json(payments);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = payments.find(item => item.id === id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json(handleMessage("Pagamento não encontrado."));
    }
});

router.post('/', (req, res) => {
    if (req.body.name) {
        const newUser = {
            id: payments.length + 1,
            name: req.body.name
        };

        payments.push(newUser);
        res.json(handleMessage("Pagamento criado com sucesso."));
    } else {
        res.status(400).json(handleMessage("Erro ao criar o pagamento. Nome não fornecido."));
    }
});

router.delete('/', (req, res) => {
    res.status(400).json(handleMessage("Rota DELETE não permitida."));
});

module.exports = router;
