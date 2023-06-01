import { sequelize } from '../utils/db.js';
import { DataTypes } from 'sequelize';

export const Theme = sequelize.define('theme', {
  image: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
