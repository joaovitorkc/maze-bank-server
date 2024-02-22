const { Router } = require('express');
const router = Router();
const conn = require('../libs/connection')

const CreateUserController = require('../controllers/users/create-user.controller');
const GetUsersController = require('../controllers/users/get-users.controller');
const GetUserController = require('../controllers/users/get-user.controller')

router.get('/', GetUsersController.getUsers);

router.get('/:id', GetUserController.getUserById);

router.post('/insertuser', CreateUserController.insertUser)

module.exports = router;
