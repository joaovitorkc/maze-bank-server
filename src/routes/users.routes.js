const { Router } = require('express');
const router = Router();

const CreateUserController = require('../controllers/users/create-user.controller');
const GetUsersController = require('../controllers/users/get-users.controller');
const GetUserController = require('../controllers/users/get-user.controller');
const UpdateUserController = require('../controllers/users/update-user.controller');

router.get('/', GetUsersController.getUsers);

router.get('/getuser/:id', GetUserController.getUserById);

router.patch('/updateuser/:id', UpdateUserController.updateUserById);

router.post('/insertuser', CreateUserController.insertUser);

module.exports = router;
