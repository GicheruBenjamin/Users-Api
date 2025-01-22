import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Database configuration
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_STORAGE, // Path to SQLite database file
  logging: false, // Disable logging
});

try {
  await sequelize.authenticate();
  console.log('Database connected successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
