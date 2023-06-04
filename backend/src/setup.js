import 'dotenv/config';
import { sequelize } from './utils/db.js';
import './models/Tag.js';

await sequelize.sync({ force: true });
