// models.js
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // This file will be created in your project root
});

// Define the Profile model
const Profile = sequelize.define('Profile', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  about: {
    type: DataTypes.TEXT,
  },
  bio: {
    type: DataTypes.TEXT,
  },
  location: {
    type: DataTypes.STRING,
  },
  followerCount: {
    type: DataTypes.INTEGER,
  },
  connectionCount: {
    type: DataTypes.INTEGER,
  },
  bioLine: {
    type: DataTypes.STRING,
  },
});

module.exports = { sequelize, Profile };