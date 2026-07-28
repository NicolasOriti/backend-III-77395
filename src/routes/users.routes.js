import express from 'express';
import UserController from '../controllers/user.controller.js';

const router = express.Router();

// Querys para traer segun nombre, role
router.get('/', UserController.getAll);

router.get('/:id', UserController.getById);

router.post('/', UserController.create);

router.patch('/:id', UserController.update);

router.delete('/:id', UserController.remove);

export default router;
