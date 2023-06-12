import { sequelize } from '../utils/db.js';
import { DataTypes } from 'sequelize';

export const Question = sequelize.define('question', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  answers: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  correct: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  }
});
