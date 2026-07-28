import UserRepository from '../repositories/user.repository.js';

import CustomError from '../errors/custom.error.js';

class UserService {
  static async getAll() {
    return await UserRepository.find();
  }

  static async getById(id) {
    const user = await UserRepository.findById(id);
    if (!user) {
      throw new CustomError('USER_NOT_FOUND');
    }
    return user;
  }

  static async create(data) {
    return await UserRepository.create(data);
  }

}

export default UserService;
