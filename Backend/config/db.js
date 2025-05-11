require('dotenv').config(); // Make sure this is at the top of your file

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_Name, process.env.DB_User, process.env.DB_Password, {
  host: process.env.DB_Host,
  port: process.env.DB_Port,
  dialect: 'mysql',
});



module.exports = sequelize;
