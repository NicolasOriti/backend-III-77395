import express from 'express';

import { config } from './config/config.js';
import { connectDB } from './config/db.js';

import mocksRoutes from './mocks/routes/mocks.routes.js';
import usersRoutes from './routes/users.routes.js';

const app = express();

app.use(express.json());
app.use('/api/users', usersRoutes);

if (config.NODE_ENV !== 'production') {
  app.use('/api/mocks', mocksRoutes);
}

app.get('/health', (req, res) => {
  res.send(`ShipNow API v1 - corriendo en ${config.NODE_ENV}`);
});

connectDB();

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
