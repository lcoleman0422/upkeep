const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./users');

// Declare Table
const tableName = 'friends';

// Define table columns 
const Friend = sequelize.define('Friend', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNotNull: false,
    primaryKey: true,
  },
  data: {
    type: Sequelize.JSON,
    allowNotNull: false,
  },

}, { tableName });

// Create Foreign Key in Friends table with userid from Users
Friend.belongsTo(User);
User.hasOne(Friend);

module.exports = Friend;
