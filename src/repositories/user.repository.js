import UserModel from '../models/user.model.js';

class UserRepository {
  static async find() {
    return await UserModel.find();
  }

  static async findById(id) {
    return await UserModel.findById(id);
  }

  static async create(data) {
    return await UserModel.create(data);
  }
}

export default UserRepository;
