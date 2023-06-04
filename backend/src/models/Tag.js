import { sequelize } from '../utils/db.js';
import { DataTypes } from 'sequelize';

export const Tag = sequelize.define('tag', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
