import 'dotenv/config';
import { sequelize } from './utils/db.js';
import './models/Paragraph.js';

await sequelize.sync({ force: true });
