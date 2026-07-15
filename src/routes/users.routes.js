import express from 'express';
import UserController from '../controllers/user.controller.js';

const router = express.Router();

// Querys para traer segun nombre, role
router.get('/', UserController.getAll);

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
});

router.post('/', (req, res) => {
  const { name, email } = req.body;
  res.send(`User created: ${name}, ${email}`);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.send(`User updated: ID ${id}, Name: ${name}, Email: ${email}`);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`User deleted: ID ${id}`);
});

export default router;
