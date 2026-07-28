import ProductModel from '../models/product.model.js';

class ProductRepository {
  static async find() {
    return await ProductModel.find();
  }

  static async findById(id) {
    return await ProductModel.findById(id);
  }

  static async create(data) {
    return await ProductModel.create(data);
  }

  static async createMany(productsArray) {
    return await ProductModel.insertMany(productsArray);
  }

  static async updateById(id, data) {
    return await ProductModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteById(id) {
    return await ProductModel.findByIdAndDelete(id);
  }
}

export default ProductRepository;
