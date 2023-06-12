import 'dotenv/config';
import { sequelize } from './utils/db.js';
import './models/Question.js';

await sequelize.sync({ force: true });
