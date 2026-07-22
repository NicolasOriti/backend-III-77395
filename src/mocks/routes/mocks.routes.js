import express from 'express';

import MockController from '../controllers/mock.controller.js';

const router = express.Router();

router.get('/mocking-users', MockController.mockingUsers);


// /mocking-products
router.post('/generate-products', MockController.generateProducts);

export default router;
