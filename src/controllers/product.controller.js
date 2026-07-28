import ProductService from '../services/product.service.js';

class ProductController {
  static async getAll(req, res) {
    try {
      const products = await ProductService.getAll();
      res.status(200).json(products);
    } catch {
      console.warn('Error getting products');
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductService.getById(id);
      if (!product) {
        return res.status(404).json({ statusCode: 404, message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      if (error.name === 'CastError') {
        return res.status(400).json({ statusCode: 400, message: 'Invalid product id' });
      }
      console.warn('Error getting product');
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  }

  static async create(req, res) {
    try {
      const { title, description, code, price, category } = req.body;
      if (!title || !description || !code || price === undefined || !category) {
        return res.status(400).json({ statusCode: 400, message: 'Missing required fields' });
      }
      const product = await ProductService.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ statusCode: 400, message: 'Product code already in use' });
      }
      console.warn('Error creating product');
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductService.update(id, req.body);
      if (!product) {
        return res.status(404).json({ statusCode: 404, message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      if (error.name === 'CastError') {
        return res.status(400).json({ statusCode: 400, message: 'Invalid product id' });
      }
      console.warn('Error updating product');
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  }

  static async remove(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductService.remove(id);
      if (!product) {
        return res.status(404).json({ statusCode: 404, message: 'Product not found' });
      }
      res.status(200).json({ statusCode: 200, message: 'Product deleted' });
    } catch (error) {
      if (error.name === 'CastError') {
        return res.status(400).json({ statusCode: 400, message: 'Invalid product id' });
      }
      console.warn('Error deleting product');
      res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });
    }
  }
}

export default ProductController;
