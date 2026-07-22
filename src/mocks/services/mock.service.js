import { faker } from '@faker-js/faker';

import ProductModel from '../../models/product.model.js';

import { USER_ROLES } from '../../utils/constants.js';

class MockService {
  static generateMockUsers = (count) => {
    const roles = Object.values(USER_ROLES);
    const users = Array.from({ length: count }, () => {
      return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: faker.helpers.arrayElement(roles),
      };
    });

    return users;
  };

  static generateMockProducts = (count) => {
    const products = Array.from({ length: count }, () => {
      return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price()),
        code: faker.string.alphanumeric({ length: 10 }),
        category: faker.commerce.department(),
        stock: faker.number.int({ min: 0, max: 100 }),
        thumbnails: [faker.image.urlLoremFlickr({ category: 'product', width: 640, height: 480 })],
      };
    });

    return products;
  };

  static saveMockProducts = async (products) => {
    await ProductModel.insertMany(products);
  };
}

export default MockService;
