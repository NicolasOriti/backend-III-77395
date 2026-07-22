import MockService from '../services/mock.service.js';

class MockController {
  static async mockingUsers(req, res) {
    try {
      const rawCount = req.query.count;

      const count = rawCount ? parseInt(rawCount) : 10;

      // validar que count sea un numero positivo y menor a 1000

      const users = MockService.generateMockUsers(count);

      res.status(200).json(users);
    } catch (error) {
      console.warn('Error generating mock users:', error);
      res.status(500).json({ error: 'Error generating mock users' });
    }
  }

  static async generateProducts(req, res) {
    try {
      const { count, saveToDatabase } = req.body;
      const products = MockService.generateMockProducts(count);

      if (saveToDatabase) {
        await MockService.saveMockProducts(products);
        res.status(201).json({ products, message: 'Products saved in db successfully' });
      }

      res.status(200).json({ products, message: 'Products generated successfully' });
    } catch (error) {
      console.log('Error generating mock products:', error);
      res.status(500).json({ statusCode: 500, message: 'Error generating mock products' });
    }
  }
}

export default MockController;
