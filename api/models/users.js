const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

// Declare table
const tableName = 'users';

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNotNull: false,
    primaryKey: true,
  },
  userName: {
    type: Sequelize.STRING,
    unique: true,
    allowNotNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNotNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNotNull: false,
  },

}, { tableName });

module.exports = User;
