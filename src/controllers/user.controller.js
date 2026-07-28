import UserService from '../services/user.service.js';

class UserController {
  static async getAll(req, res) {
    try {
      const users = await UserService.getAll();
      res.status(200).json(users);
    } catch {
      console.warn('Error getting users');
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);
      if (!user) {
        return res.status(404).json({ statusCode: 404, message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      if (error.name === 'CastError') {
        return res.status(400).json({ statusCode: 400, message: 'Invalid user id' });
      }
      console.warn('Error getting user');
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  }

  static async create(req, res) {
    try {
      const { first_name, last_name, email, password } = req.body;
      if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ statusCode: 400, message: 'Missing required fields' });
      }
      const user = await UserService.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ statusCode: 400, message: 'Email already in use' });
      }
      console.warn('Error creating user');
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.update(id, req.body);
      if (!user) {
        return res.status(404).json({ statusCode: 404, message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      if (error.name === 'CastError') {
        return res.status(400).json({ statusCode: 400, message: 'Invalid user id' });
      }
      console.warn('Error updating user');
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  }

  static async remove(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.remove(id);
      if (!user) {
        return res.status(404).json({ statusCode: 404, message: 'User not found' });
      }
      res.status(200).json({ statusCode: 200, message: 'User deleted' });
    } catch (error) {
      if (error.name === 'CastError') {
        return res.status(400).json({ statusCode: 400, message: 'Invalid user id' });
      }
      console.warn('Error deleting user');
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  }
}

export default UserController;