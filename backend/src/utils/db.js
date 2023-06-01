import 'dotenv/config';
import { Sequelize } from 'sequelize';

const {
  POSTGRES_URL,
} = process.env;

export const sequelize = new Sequelize(`${POSTGRES_URL}?sslmode=require`);
