import { sequelize } from '../utils/db.js';
import { DataTypes } from 'sequelize';

export const Paragraph = sequelize.define('paragraph', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  themeId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});
